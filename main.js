let batterylavel = document.getElementById("current_stauts");
let BatteryText = document.getElementById("batteryText")
let TimeLeft = document.getElementById("time");

window.onload = () => {
    if (!navigator.getBattery) {
        alert("hello");
        return false;
    }
}
navigator.getBattery().then((battery) => {
    function AllBetteryUpdate(){
        connectCharger();
        disconnentcharger();
    }
    AllBetteryUpdate();
    battery.addEventListener("chargingchange", () => {
        AllBetteryUpdate();
    });




    function connectCharger() {
        if(battery.charging){
            batterylavel.classList.add('active');
            TimeLeft.style.display = "none";
        }
        else{
            batterylavel.classList.remove('active'); 
            TimeLeft.style.display = "block";

           if(parseInt(battery.dischargingTime)){
             let hour = parseInt(battery.dischargingTime / 3600);
             let min = parseInt(battery.dischargingTime / 60 - hour * 60);
             TimeLeft.innerText = `${hour} Hr ${min} Min remaining`;
           }
        }
    };


    function disconnentcharger(){
        let currentlevel = (battery.level) * 100 ;
        batterylavel.style.height = `${currentlevel}%` ;
        BatteryText.innerText = `${currentlevel}%`;
        if(currentlevel < 20){
            batterylavel.style.background = "red";
        }
        else if(currentlevel > 20 && currentlevel < 50){
            batterylavel.style.background = "rgb(251, 255, 0";
        }
        else if(currentlevel > 50 && currentlevel < 80){
            batterylavel.style.background = "rgb(128, 255, 0)";
        }
        else{
            batterylavel.style.background = "rgb(0, 255, 21)";
        }
        
        
    }
});
