import { User } from "../models/User"
import { connectdb } from "../mongodb/mongoosedb"




  


  export const createandupdateUser = async (id,first_name,image_url,last_name,username,email_addresses)=>{
    try {
        await connectdb()
        const user = await User.findOneAndUpdate({clerkId:id},{
            $set:{
                firstName:first_name,
                lastName:last_name,
                email:email_addresses[0].email_address,
                username:username
            },
        },{upsert:true,new:true})
          await user.save()
    } catch (error) {
        console.log(error)
    }

  }

  export const deleteUser = async ()=>{
    try {
        await connectdb()
        await User.findByIdAndDelete({clerkId:id})
    } catch (error) {
        console.log(error)
    }
  }