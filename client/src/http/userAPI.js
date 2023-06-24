import {$host} from "./index";

//Search

export const sendData = async (name, author) => { 
    const response = await $host.post("app/search/search", {name, author})
    return response 
}

export const sendInpLink = async (link) => { 
    const response = await $host.post("app/search/checklink", {link})
    return response 
}

//Pages

export const sendDownload = async (name, author) => {
    const response = await fetch(`http://localhost:5000/app/projects/download?data=${author}-${name}`)
    const blob = await response.blob()
    const downloadURL = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = downloadURL
    link.download = `${author}-${name}.zip`
    document.body.appendChild(link)
    link.click()
    link.remove()
}
