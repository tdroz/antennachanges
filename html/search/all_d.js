var searchData=
[
  ['l_480',['L',['../cgcalc2_8m.html#a67824ecf84f5816f07b74fa956bdbcd2',1,'cgcalc2.m']]],
  ['l_481',['l',['../quaternion_8m.html#a055a2ba98e94309ddf906a782db439fe',1,'quaternion.m']]],
  ['last_482',['Last',['../class_utilities_1_1_h_s_f_profile.html#ac579465db35d3e179f4bdad73796dfe6',1,'Utilities::HSFProfile']]],
  ['lasttime_483',['LastTime',['../class_utilities_1_1_h_s_f_profile.html#a6fbf23369b63d8c0b47777beefb47116',1,'Utilities::HSFProfile']]],
  ['lastvalue_484',['LastValue',['../class_utilities_1_1_h_s_f_profile.html#a295da50022057d630a2d69155d4854f1',1,'Utilities::HSFProfile']]],
  ['len_485',['len',['../quaternion_8m.html#aee63acd8d58fcb16d69ab09bec843473',1,'len():&#160;quaternion.m'],['../quaterniondemo2_8m.html#a8eb39ddb0a13eb98fdec1d61e330ccbb',1,'len():&#160;quaterniondemo2.m']]],
  ['len_3c_200_20dim_3dfind_28siz_20_3e_3d_2dlen_2c_201_2c_20_27first_27_29_3belse_20dim_3dfind_28siz_3d_3dlen_2c_201_2c_20_27first_27_29_3bendif_20isempty_28dim_29_20dim_3d0_3bendif_20dim_3c_202_20aout_3dain_3bperm_3d1_20_3andm_3belse_25_20permute_20so_20that_20dim_20becomes_20the_20first_20dimension_20perm_3d_5bdim_20_3andm_2c_201_20_3adim_2d1_5d_3baout_3dpermute_28ain_2c_20perm_29_3bendend_20_25_20finddimfunction_20s_3dsgn_28x_29_25_20function_20s_3dsgn_28x_29_2c_20if_20x_20_3e_3d0_2c_20s_3d1_2c_20else_20s_3d_2d1s_3dones_28size_28x_29_29_3bs_28x_3c_200_29_3d_2d1_3bend_20_25_20sgnfunction_5bu_2c_20n_5d_3dunitvector_28v_2c_20dim_29_25_20function_5bu_2c_20n_5d_3dunitvector_28v_2c_20dim_29_25_20inputs_3a_25_20v_20matrix_20of_20vectors_25_20dim_5boptional_5d_20dimension_20to_20normalize_2c_20dim_20_3e_486',['len&lt; 0 dim=find(siz &gt;=-len, 1, &apos;first&apos;);else dim=find(siz==len, 1, &apos;first&apos;);endif isempty(dim) dim=0;endif dim&lt; 2 aout=ain;perm=1 :ndm;else% Permute so that dim becomes the first dimension perm=[dim :ndm, 1 :dim-1];aout=permute(ain, perm);endend % finddimfunction s=sgn(x)% function s=sgn(x), if x &gt;=0, s=1, else s=-1s=ones(size(x));s(x&lt; 0)=-1;end % sgnfunction[u, n]=unitvector(v, dim)% function[u, n]=unitvector(v, dim)% Inputs:% v matrix of vectors% dim[OPTIONAL] dimension to normalize, dim &gt;',['../quaternion_8m.html#a486f46411e2db8fb3d3586271bb1f8e0',1,'quaternion.m']]],
  ['length_487',['Length',['../class_utilities_1_1_matrix.html#a754f4051fb269ae220473d2ae7550894',1,'Utilities.Matrix.Length()'],['../class_utilities_1_1_matrix_index.html#a2ea3eb91bc2df811fcebdf631d609da7',1,'Utilities.MatrixIndex.Length()']]],
  ['length_488',['length',['../quaternion_8m.html#ab6971d02bd34c9866ba696029ed87744',1,'length():&#160;quaternion.m'],['../quaternion_8m.html#a6ab4da98b5ec59cb664cb83a7b5b351e',1,'length(varargin{im}))) qi:&#160;quaternion.m'],['../quaternion_8m.html#a047ccb555bc4600157d72106cff9828b',1,'length(siq) &gt; 2 sin:&#160;quaternion.m'],['../quaternion_8m.html#a04c553e353edc68bb0fee9f0f74ee9f2',1,'length(t):&#160;quaternion.m']]],
  ['limitintegratetoprof_489',['limitIntegrateToProf',['../class_utilities_1_1_h_s_f_profile.html#a2d87e14f700b032e0378c44a9cdf482e',1,'Utilities::HSFProfile']]],
  ['linearspeed_490',['linearspeed',['../cgcalc2_8m.html#af26d9ba67ac0b6cdef7a8d74d0bb1efa',1,'cgcalc2.m']]],
  ['linewidth_491',['lineWidth',['../data_import_8m.html#a5a74a6860cfd55545040d29e1709584a',1,'dataImport.m']]],
  ['listing_492',['listing',['../data_import_8m.html#afeb3ee5fe76291f19b5aae1bdf9b122d',1,'dataImport.m']]],
  ['ll_493',['LL',['../quaterniondemo_8m.html#a185f2f4be923b7fe060a456a65f8b131',1,'quaterniondemo.m']]],
  ['load_494',['load',['../earth__sphere_8m.html#a613f9af27713f6fa0b0957146e4e7f2e',1,'earth_sphere.m']]],
  ['loadtargetsintotasklist_495',['loadTargetsIntoTaskList',['../class_mission_elements_1_1_task.html#aa5b334fdf68a4f6bc0ba66b8f8b26502',1,'MissionElements::Task']]],
  ['locationtarget_496',['LocationTarget',['../namespace_mission_elements.html#a7a09fafd2dcf4a37788cbeb58278abf5a920d86ec86ef918871b8b884e9202243',1,'MissionElements']]],
  ['logging_497',['Logging',['../namespace_logging.html',1,'']]],
  ['loggingunittest_498',['LoggingUnitTest',['../namespace_logging_unit_test.html',1,'']]],
  ['lower_499',['Lower',['../class_utilities_1_1_matrix_index.html#a378e9984008a06b3f60f772db1d37646',1,'Utilities::MatrixIndex']]],
  ['lowerlimitintegratetoprof_500',['lowerLimitIntegrateToProf',['../class_utilities_1_1_h_s_f_profile.html#a6909f15908f09f947ae5888b8d9030a4',1,'Utilities::HSFProfile']]],
  ['lq_501',['lq',['../quaternion_8m.html#a96135a7b659062db97bd3c8f41f859a8',1,'quaternion.m']]],
  ['lx_502',['lx',['../quaternion_8m.html#af7c2dc72bb970fef4e6313293cadfe95',1,'quaternion.m']]]
];
