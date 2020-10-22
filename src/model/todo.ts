import { ITodo } from "./../types/todo"
import { model, Schema } from "mongoose"

const todoSchema: Schema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },

   name:{
       type: String,
       required:true,
   },
   todoitems: {
       id :{ type: String, required:true},
       description:{type: String, required: true},
       status:{type: Boolean, required: true}
   }
  })
  export default model<ITodo>("Todo", todoSchema)