import mg from "mongoose"

async function cnt (){
    try {
        mg.connect(process.env.BANCO)
        console.log("conect com banco (conect kkkk)");
    } catch (error) {
        console.log("ERRO NO BANCO: ",error);
    }   
}

cnt()

export default mg