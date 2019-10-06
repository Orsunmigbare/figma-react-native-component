import {Actions} from './lib/actions';
import {Helpers} from './lib/helpers';
import {Action_Types} from './lib/action-types'
import {Command_Actions} from './lib/command_actions';
let command : string= figma.command, current_selection = figma.currentPage.selection;

switch(command){
    case  'CREATE_SNIPPET' :
        Command_Actions.CREATE_SNIPPET(current_selection)

}




