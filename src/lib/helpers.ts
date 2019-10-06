export const Helpers = {
    // create JSX tags
    createJsxtag : (name: RN_Component_Name) : string =>{
        if(name === 'Image' || name === 'TextInput'){
            return `<${name}/>`
        }
        return `<${name}> </${name}>`
    },


    // append Compnent
    appendChild : (parent:string, child: string): string=>{
      let closing_index  =  parent.lastIndexOf('</')
      let parent_array  = parent.split('');
      parent_array.splice(closing_index-1,0,child);
      return parent_array.join('')
    },
     

    // append Prop to JSX
    appendProp : (prop:RN_Component_Prop,component:string): string =>{
        let tag_index = component.indexOf('>');
        let component_array = component.split('');
        component_array.splice(tag_index-1,0,prop)
        return component_array.join('')
    },


    // get RN compnent type from nodetype
    getRNCompnentName : ( node: SceneNode ): RN_Component_Name | null=>{
        let component_name:RN_Component_Name | null;
        switch(node.type){

            case 'TEXT' :
            component_name = 'Text';
            break;

            case 'COMPONENT':
            case 'FRAME':
            case 'INSTANCE':
            case 'BOOLEAN_OPERATION':
            case 'GROUP':
            component_name = 'View';
            break;

            case 'RECTANGLE':
            case 'ELLIPSE' :
                if(typeof(node.fills) === 'object'){
                    switch(node.fills[0].type){
                        case 'IMAGE':
                            component_name = 'Image';
                            break;
                        default:
                            component_name = 'View';
                    }
                }

            case 'VECTOR' : 
                component_name = 'Image';
            break;
            case 'POLYGON':
            case 'STAR':
            component_name = 'Image'
            break;

            default :
            component_name = null;
        }
        return component_name
    }

}
