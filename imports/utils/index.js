


export function mongoid(id){
    if(typeof id === 'string'){
        return  new Meteor.Collection.ObjectID(id);
    } 
    return id;
}

export function mongostr(id){
    if(typeof id === 'string'){
        return id;
    } else {
        return id._str;
    }
}
