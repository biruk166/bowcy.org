
// to check the number of word in the given input 
function CheckWordLength(word, count)
{
    word = word.split(' ').length;
    if(word < count)
    {
        return false;
    }
    else
    {
        return true;
    }
}

// from the given article name it will create a file name by adding up the first
// few letters from the article
function CreateFileName(articleTitle)
{
    let dirctName = '';
    if(CheckWordLength(articleTitle, 5))
    {
        let article = articleTitle.split(' ');
        for(let i = 0; i < 5; i++){
            dirctName += article[i];
        }
        return dirctName;
    }
}


// the function will verify if the user entered the right email format
function VerifyEmailFormat(email)
{
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    if(regx.test(email))
    {
        return true;
    }
    return false;
}

function IsLangugeEnglish(lan){
    if(lan == 'english'){
        return true;
    }
    else return false;
}

// the following function will create the date the article
// or any other material published
function GenrateDate()
{
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let val = date +"/"+month+'/'+year;
    return val;
}

//finish this function
//used to control what kind of file type we are reciving
// and it genrates a directory name for the image
function UploadPicture(filePath)
{
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath))
    {
        return '';
    }
    else
    {
        let reader = new FileReader();
        reader.onload =(e)=>{
            return e.target.result;
        }
    }
}

// finish this func
// to upload PDF file to the website and save its file name in the data base
function Is_PDF_File(filePath)
{
    let allowedExtesion = /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;
    if(allowedExtesion.exec(filePath)){
        return false;
    }
}


function checkPassWord(){
    return true;
}

export default{CheckWordLength,
               CreateFileName, 
               VerifyEmailFormat,
               GenrateDate,
               UploadPicture,
               Is_PDF_File,
               checkPassWord,
               IsLangugeEnglish
            }

