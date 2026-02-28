
//This creates Hijri Date based on the current system time
const today = new Date();
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Define options to force the Saudi Arabia timezone
const options = {
    timeZone: 'Asia/Riyadh',
    calendar: 'islamic-umalqura',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}
// Format for the day number only
const dayFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {timeZone: 'Asia/Riyadh',  day: 'numeric'});
const hijriDay = dayFormatter.format(today) - 1;
const hijriDayInBangla = new Intl.NumberFormat('bn-BD').format(hijriDay);

// Format for the full string
const fullFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', options);
const hijriFull = fullFormatter.format(today);

//Update your HTML tags
document.getElementById('hijri-day').innerHTML = hijriDayInBangla + 'তম  রমজান ';
document.getElementById('full-hijri').innerHTML = hijriFull;
document.getElementById('full-hijri').value = hijriFull;

console.log(`today: ${today} \n hijriDay: ${hijriDay } \n DayFormater: ${JSON.stringify(dayFormatter)} \n fullFormater: ${ JSON.stringify(fullFormatter)} \n User Time Zone: ${userTimeZone}`);





// <!--Data save and retrive from local storage-->
let myDayRecordString =  localStorage.getItem("myDayRecord");
let myDayRecord;
if(!myDayRecordString){
    myDayRecord = {
        headers:{
            user:{
                name:'',
                phone:'',
                email: '',
                age: 0,
                address: ''
            },
            ramadan: {
                englishDate: '',
                banglaDate: '',
                arabicDate: '',
                nthRamadhan: ''
            }
        },
        body: {
            input1: false, input2: false, input3:false, input4:false, input5:0, input6:0, input7:0, input8:0, input9:0, input10:0, input11:0, input12:0, input13:0, input14:0, input15:0, input16:0, input17:0, input18:0, input19:0, input20:0, input21:0, input22:false, input23:false, input24:false, input25:false, input26:false, input27:false, input28:false, input29:false, input30:false, input31:false, input32:false, input33:false, input34:false, input35:false, input36:false, input37:false, input38:false, input29:false
    }
        }
} else {
    myDayRecord = JSON.parse(myDayRecordString);
    displayMyDayRecord(myDayRecord);
}
//Function to sanve form datas to local storage
function save(id, data, record){
    record.body[id]= data;
    localStorage.setItem("myDayRecord", JSON.stringify(record));
    console.log(`myDayRecord:  `, record)
}

//Function to display data 
function displayMyDayRecord(record){
    console.log("Record: ", record.body)
    Object.entries(record.body).forEach(([id, value]) =>{
        const input  = document.getElementById(id);
        if(input){
            input.type === 'checkbox' ? input.checked = value : input.value = value;
        }
    })
}