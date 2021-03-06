import sys
import clr
import System.Collections.Generic
import System
clr.AddReference('System.Core')
clr.AddReference('IronPython')
clr.AddReference('System.Xml')
clr.AddReferenceByName('Utilities')
clr.AddReferenceByName('HSFUniverse')
clr.AddReferenceByName('UserModel')
clr.AddReferenceByName('MissionElements')
clr.AddReferenceByName('HSFSystem')

import System.Xml
import HSFSystem
import HSFSubsystem
import MissionElements
import Utilities
import HSFUniverse
import UserModel
from HSFSystem import *
from System.Xml import XmlNode
from Utilities import *
from HSFUniverse import *
from UserModel import *
from MissionElements import *
from System import Func, Delegate, Math
from System.Collections.Generic import Dictionary, KeyValuePair
from IronPython.Compiler import CallTarget0

class adcs(HSFSubsystem.ADCS):
    def __init__(self, node, asset):
        self.Asset = asset
        self.ADCS_Slew = StateVarKey[Matrix[System.Double]]("asset1.slewangle")
        pass
    def GetDependencyDictionary(self):
        dep = Dictionary[str, Delegate]()
        depFunc1 = Func[Event,  Utilities.HSFProfile[System.Double]](self.POWERSUB_PowerProfile_ADCSSUB)
        dep.Add("PowerfromADCS", depFunc1)
        return dep
    def GetDependencyCollector(self):
        return Func[Event,  Utilities.HSFProfile[System.Double]](self.DependencyCollector)
    def POWERSUB_PowerProfile_ADCSSUB(self, event):
        prof1 = HSFProfile[System.Double]()
        prof1[event.GetEventStart(self.Asset)] = 30
        prof1[event.GetTaskStart(self.Asset)] = 60
        prof1[event.GetTaskEnd(self.Asset)] = 30
        return prof1
    def CanPerform(self, event, universe):
        timetoslew = 10
        es = event.GetEventStart(self.Asset)
        ts = event.GetTaskStart(self.Asset)
        te = event.GetTaskEnd(self.Asset)
        if (es + timetoslew > ts):
            if (es + timetoslew > te):
               #     HSFSystem.Logger.Report("ADCS: Not enough time to slew event start: "+ es + "task end" + te)
                    return False
            else:
                    ts = es + timetoslew

        timetocapture = 30
        position = self.Asset.AssetDynamicState
        timage = ts + timetocapture / 2
        m_SC_pos_at_ts_ECI = position.PositionECI(ts)
        m_target_pos_at_ts_ECI = event.GetAssetTask(self.Asset).Target.DynamicState.PositionECI(ts)
        m_pv_start = m_target_pos_at_ts_ECI - m_SC_pos_at_ts_ECI

        m_SC_pos_at_te_ECI = position.PositionECI(te)
        m_target_pos_at_te_ECI = event.GetAssetTask(self.Asset).Target.DynamicState.PositionECI(te)
        m_pv_end = m_target_pos_at_te_ECI - m_SC_pos_at_te_ECI

        #slew angle calcs using dot products
        def dotproduct(m_pv_start, m_pv_end):
            return sum((a*b) for a, b in zip(m_pv_start, m_pv_end))

        def length(v):
            return Math.Sqrt(dotproduct(v, v))

        def angle(m_pv_start, m_pv_end):
            return Math.Acos(dotproduct(m_pv_start, m_pv_end) / (length(m_pv_start) * length(m_pv_end)))

        slewangle = angle(m_pv_start, m_pv_end)


        event.State.SetProfile(self.POINTVEC_KEY, HSFProfile[Matrix[System.Double]](ts, m_pv_start))
        event.SetTaskStart(self.Asset, ts)
        self._newState.AddValue(self.ADCS_Slew, KeyValuePair[System.Double, Matrix[System.Double]](timage, slewangle))

        return True
       # return super(adcs, self).canPerform(event, universe)
    def CanExtend(self, event, universe, extendTo):
        return super(adcs, self).CanExtend(event, universe, extendTo)
    def DependencyCollector(self, currentEvent):
        return super(adcs, self).DependencyCollector(currentEvent)
