export const Command_Actions = {
    CREATE_SNIPPET : (selection:any): string| void=>{
            if(selection.length === 0){
                figma.closePlugin('🍔\t Nothing selected for conversion')
            }
         

    }
}