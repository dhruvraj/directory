// Implement your application view here using the SJS DSL.
border('Customer.view') {
  north {
    form (model:'Customer')
  }
  center {
    border (model:'Customer', cascadingModels:true) {
      north {
        table (model:'Customer-contacts')
      }
      center {
        form (model:'Contact')
        //border (parent:'Contact.view')
      }
    }
  }
}

border ('Contact.view', 
    actionMap:'beanModuleActionMap') {
      north {
        form (model:'Contact', columnCount:2)
      }
      center {
        tabs (renderingOptions:'LABEL') {
          views {
            table (model:'Contact-phoneNumbers',
              columns:['type', 'number'],
              actionMap:'masterDetailActionMap')
            
            form (model:'Contact', 
              fields:['comments'], labelsPosition:'NONE', name:'comments')
            
            table (model:'Contact-activities',
              actionMap:'masterDetailActionMap')
          }
        }
      }
    }

table ('PhoneNumber.table', 
    parent:'decoratedView', readOnly:true) { 
      actionMap {
        actionList('QUERY') {
          action ref:'queryModuleFilterAction'
        }
      }
    }