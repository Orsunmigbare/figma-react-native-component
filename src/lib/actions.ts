const nodes_can_children: NodeType[] = [
    'GROUP', 'FRAME', 'INSTANCE', 'BOOLEAN_OPERATION','COMPONENT'
]
export const Actions = {
    // get all children of a given node
    getChildren : ( node_type: NodeType, nodeId: string): Object|null[] | null =>{
        let has_children:boolean = false
            for(let i=0; i < nodes_can_children.length; i++ ){
                 has_children = node_type === nodes_can_children[i];
                 if(has_children === true) continue
            }
         if(!has_children) return null
         return figma.getNodeById(nodeId) ? figma.getNodeById(nodeId).children : null
    },


}