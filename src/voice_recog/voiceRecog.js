/*created by Pranav Gupta(pg07codes) on 11/12/18*/

import annyang from 'annyang'

// this file is a basic wrapper for annyang API to be used in App.js

export default {

    isSupported(){
        return annyang !==null
    },
    addCommand(el){
        annyang.addCommands({
            'add':function(){
                el.click()
            },
            'ed':function(){
                el.click()
            },
            'ad':function(){
                el.click()
            },
            'at':function(){ // these words may be a homonyms
                el.click()
            }

        })
    },
    typeCommand(el){
      annyang.addCommands({
          'pen :task':function(task){
              el.value=task
          },
          'pin :task':function(task){
              el.value=task
          },
          'pan :task':function(task){ // some possible homonyms
              el.value=task
          }
      })
    },
    isOn(){
        return annyang.isListening()
    },
    startAnn() {
        if (annyang) {
            annyang.start()
        }
    },
    abort() {
        if (annyang) {
            annyang.abort()
        }
    },
    resume() {
        if (annyang) {
            annyang.resume()
        }
    }
}

