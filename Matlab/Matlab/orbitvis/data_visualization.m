%% Data Visualization Breakdown
%% Evan Droz
close all
clear all 
clc 


%% Processing

filenames = dir('*.csv');
[numfiles, ~] = size(filenames);
    tiledlayout('flow')

for i = 1:numfiles
    assetname = (filenames(i).name(8:end-4));
    asset.(assetname) = readtable(filenames(i).name, 'Delimiter',{',', ';'}, 'Whitespace' ,'[]');
    columns = width(asset.(assetname));
    for j = 1:columns-1
       nexttile
       plot(asset.(assetname).(1),(asset.(assetname).(j+1)))
       title(asset.(assetname).Properties.VariableNames(j+1),'vs. time', 'Interpreter', 'none')
       xlabel('time')
       ylabel(asset.(assetname).Properties.VariableNames(j+1))%, 'Interpreter', 'none')
    end
    
    
end
    
