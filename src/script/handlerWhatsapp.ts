interface Communication {
    baseUrl: URL,
    cellphone: string,
    message: string,
}


const baseUrl = new URL("https://api.whatsapp.com/send");
const cellphone = '3132056541';

const communicate = (message: string): Communication => {
    return {
        baseUrl: baseUrl,
        cellphone: cellphone,
        message: message,
    }
}

export const sendMessage = (message:string) => {
    const comm = communicate(message);
    const url = new URL(comm.baseUrl);
    url.searchParams.set("phone", comm.cellphone);
    if(comm.message){
        url.searchParams.set("text", comm.message);
    }
    window.open(url.toString(),'_blank');
}