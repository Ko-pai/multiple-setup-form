document.querySelectorAll("input[type='number']").forEach(input =>{
    input.oninput = () =>{
        if(input.value.length > input.maxLength) input.value = input.value.slice(0,input.maxLength)
    }
})



const PERSONAL_INFO = document.querySelector(".personal-info")
const SELECT_PLAN = document.querySelector(".select-plan")
const ADD_ONS= document.querySelector(".add-ons")
const FINISHING_UP= document.querySelector(".finishing-up")
const THANK_CONTAINER = document.querySelector(".last-container")

const nextStep = document.querySelector(".next-step")
const nextStepInFinishingUp = document.querySelector(".next-step-in-FinishUp")

const goBackButton= document.querySelector(".goBack")







/* for select plan */

const circleContainer = document.querySelector('.circle-container')
const yearMonthContainer = document.querySelector('.year-month-container')
const circle = document.querySelector(".circle")
const monthText = document.querySelector('.monthly')
const yearText = document.querySelector('.yearly')
const textContainer = document.querySelector(".free")
const textContainer1 = document.querySelector(".free1")
const textContainer2 = document.querySelector(".free2")
const text = document.querySelector(".text")
const text1 = document.querySelector(".text1")
const text2 = document.querySelector(".text2")

circleContainer.addEventListener("click",()=>{
    console.log("heloo");
})

const arcadePlan = document.querySelector(".arcade-plan")
const advancedPlan = document.querySelector(".advanced-plan")
const proPlan = document.querySelector(".pro-plan")

const monthlyAmount = document.querySelector(".month-dollar")
const yearlyAmount = document.querySelector(".year-dollar")
const monthlyAmount1 = document.querySelector(".month-dollar1")
const yearlyAmount1 = document.querySelector(".year-dollar1")
const monthlyAmount2 = document.querySelector(".month-dollar2")
const yearlyAmount2 = document.querySelector(".year-dollar2")

const yearMonthToggle = document.querySelector(".year-month-toggle")

const nextStepInPLanTab = document.querySelector(".next-step-in-planTab")
const nextStepInAddOnsTab = document.querySelector(".next-step-in-addOnsTab")
const gobackInAddOnsTab = document.querySelector(".goBackInAddons")

const monthlyTaxInAddOns =document.querySelector(".monthlyTax")
const yearlyTaxInAddOns  =document.querySelector(".yearlyTax")

const monthlyTaxInAddOns1 =document.querySelector(".monthlyTax1")
const yearlyTaxInAddOns1  =document.querySelector(".yearlyTax1")

const monthlyTaxInAddOns2 =document.querySelector(".monthlyTax2")
const yearlyTaxInAddOns2  =document.querySelector(".yearlyTax2")

let arr = [
    {
        year : `$${90}yr`,
        month : `$${90}yr`,
    }
]
;
//for go back button in select plan container


    
circleContainer.addEventListener("click",()=>{
    

        if(circle.classList.contains("yearly")){
            circle.classList.remove("yearly")

            //for arcade month, year and free month 
            monthlyAmount.classList.add("appear")
            yearlyAmount.classList.remove("appear")
            monthlyAmount.classList.remove("remove")

            //for advanced month, year and free month 
            monthlyAmount1.classList.add("appear")
            yearlyAmount1.classList.remove("appear")
            monthlyAmount1.classList.remove("remove")


            //for pro month, year and free month 
            monthlyAmount2.classList.add("appear")
            yearlyAmount2.classList.remove("appear")
            monthlyAmount2.classList.remove("remove")


            text.style.height   = "50px"
            text1.style.height   = "50px"
            text2.style.height   = "50px"

            yearlyAmount.style.fontSize = "18px"
            yearlyAmount1.style.fontSize = "18px"
            yearlyAmount2.style.fontSize = "18px"

            arcadePlan.style.height = "160px"
            advancedPlan.style.height = "160px"
            proPlan.style.height = "160px"
            // yearMonthToggle.style.marginTop ="20px"

            textContainer.classList.remove("good")
            circle.style.transform ='translateX(0%)'
            monthText.style.color = "hsl(213, 96%, 18%)"
            yearText.style.color = "rgba(165, 160, 160, 0.808)"
            textContainer.style.display = "none"
            textContainer1.style.display = "none"
            textContainer2.style.display = "none"

            monthlyTaxInAddOns.style.display = "flex"
            yearlyTaxInAddOns.style.display = "none"

            monthlyTaxInAddOns1.style.display = "flex"
            yearlyTaxInAddOns1.style.display = "none"

            monthlyTaxInAddOns2.style.display = "flex"
            yearlyTaxInAddOns2.style.display = "none"
            
        }else{
            
            circle.classList.add("yearly")

            monthlyAmount.classList.add("remove")
            yearlyAmount.classList.add("appear")

            monthlyAmount1.classList.add("remove")
            yearlyAmount1.classList.add("appear")

            monthlyAmount2.classList.add("remove")
            yearlyAmount2.classList.add("appear")

            text.style.height   = "75px"
            text1.style.height   = "75px"
            text2.style.height   = "75px"
            text1.firstElementChild.style.marginBottom = "-2px"
            text2.firstElementChild.style.marginBottom = "-2px"
            yearlyAmount.style.fontSize = "17px"
            yearlyAmount1.style.fontSize = "17px"
            yearlyAmount2.style.fontSize = "17px"
            
            arcadePlan.style.height = "170px"
            advancedPlan.style.height = "170px"
            proPlan.style.height = "170px"
            // yearMonthToggle.style.marginTop ="30px"


            circle.style.transform ='translateX(175%)'
            monthText.style.color = "rgba(165, 160, 160, 0.808)"
            yearText.style.color = "hsl(213, 96%, 18%)"
            textContainer.textContent = `2 month free`
            textContainer.style.display = "block"
            textContainer1.textContent = `2 month free`
            textContainer1.style.display = "block"
            textContainer2.textContent = `2 month free`
            textContainer2.style.display = "block"
            // textContainer1.innerHTML += `<p>2 month free</p>`

//after clicking yearly and monthly circle to put amount and month or yearly text in next page
           
            monthlyTaxInAddOns.style.display = "none"
            yearlyTaxInAddOns.style.display = "flex"

            monthlyTaxInAddOns1.style.display = "none"
            yearlyTaxInAddOns1.style.display = "flex"
            
            monthlyTaxInAddOns2.style.display = "none"
            yearlyTaxInAddOns2.style.display = "flex"

        }
})






const listContainerInLeftHandSide = document.querySelector(".list-container")
const listArray = [
    {
        id : 1,
        name : 1,
        class : "one"
    },
    {
        id : 2,
        name : 2,
        class : "two"
    },
    {
        id : 3,
        name : 3,
        class : "three"
    },
    {
        id : 4,
        name : 4,
        class : "four"
    },
]   
listArray.map((data)=>{
    const createList = document.createElement("li")
    createList.append(data.name)
    createList.id = data.id
    listContainerInLeftHandSide.append(createList)
    createList.classList.add(data.class)
    const nameInput = document.querySelector(".nameInput")
    const emailInput = document.querySelector(".emailInput")
    const phoneNumberInput = document.querySelector(".phoneNumber")
    const errorText  = document.querySelector(".errorText")
    const errorText1  = document.querySelector(".errorText1")
    const errorText2  = document.querySelector(".errorText2")
    

    //for list nummber one to appear SELECT YOUR PLAN TAB, disappear YOUR INFO TAB  and error text method of YOUR INFO TAB
    if(createList.id == "1"){
        PERSONAL_INFO.style.display = "flex"
        ADD_ONS.style.display="none"
        createList.classList.add("active")

        // next step click in personal info 
        nextStep.addEventListener("click",()=>{
        let input = document.getElementsByTagName("input")

        if(input[0].value == ""){
            errorText.innerHTML = "This field is required"
        }else if(input[1].value == ""){
            errorText1.innerHTML = "This field is required"
        }else if(input[2].value == ""){
            errorText2.innerHTML = "This field is required"
        }

            if((input[0].value == "" || input[1].value == "" ) && input[2].value == "" ){
                errorText.innerHTML = "This field is required"
                errorText1.innerHTML = "This field is required"
                errorText2.innerHTML = "This field is required"
                

            }else if(input[0].value){
                errorText.innerHTML = ""
                if((input[0].value && input[1].value) && input[2].value){
                    errorText.innerHTML = ""
                    errorText1.innerHTML = ""
                    errorText2.innerHTML =""

                    //this is for select plan appear and your info disappear
                    const numberTwo = document.querySelector(".two")
                    setTimeout(()=>{
                    selectPlanAppear()
                    numberTwo.classList.add("active")
                    oneRemove()
                    threeRemove()
                    fourRemove()
                    
                    if(numberTwo.classList.contains("active")){
                        console.log("well play");
                    }

                   },1000)
                }else if(input[1].value){
                    errorText1.innerHTML = ""
                }
            }else if(input[1].value){
                errorText1.innerHTML = ""
            }else{
                if(input[0].value == "" || input[1].value == ""){
                    errorText.innerHTML = "This field is required"
                    errorText1.innerHTML = "This field is required"
                }else{
                    errorText2.innerHTML = ""
                }
                
            }

        
            
        })
        /* 
        nameInput.addEventListener("click",(a)=>{
            var nameText = a.target.value
            
            nextStep.addEventListener("click",()=>{
                if(nameText == ""){
                    errorText.innerHTML = "This field is required"
                    
                }else{
                    errorText.innerHTML = ""
                }
                })
        })


        emailInput.addEventListener("click",(b)=>{
            let emailText= b.target.value
            nextStep.addEventListener("click",()=>{
                name
                if(emailText == ""){
                    errorText1.innerHTML = "This field is required"
                }else{
                    PERSONAL_INFO.style.display = "none" 
                     setTimeout(()=>{
                        SELECT_PLAN.style.display = "flex"
                   },500)
                }
                })
        })

        phoneNumberInput.addEventListener("click",(c)=>{
            let phoneNo = c.target.value
            nextStep.addEventListener("click",()=>{
                if(phoneNo == ""){
                    errorText2.innerHTML = "This field is required"
                }else{
                    errorText2.innerHTML = ""
                }
                })
        })
        */
    }

    
    
    

    //go back button in select plan to show personal info page
    goBackButton.addEventListener("click",()=>{
        const numberOne = document.querySelector(".one")
        numberOne.classList.add("active")
        twoRemove()
        threeRemove()
        fourRemove()
        yourInfoAppear()
       
    })

    
    nextStepInPLanTab.addEventListener("click",()=>{
     
        if((arcadePlan.classList.contains("selected") || advancedPlan.classList.contains("selected")) || proPlan.classList.contains("selected")){
            addOnsAppear()
            const numberThree = document.querySelector(".three")
            numberThree.classList.add("active")
            oneRemove()
            twoRemove()
            fourRemove()
        
        }
    })
   
    


    createList.addEventListener("click",(e)=>{
        
        let targetId = e.target.id
        if(targetId == "1"){
            e.target.classList.add("active")
            twoRemove()
             threeRemove()
             fourRemove()
             yourInfoAppear()
             
            
        }else if(targetId == "2"){
            oneRemove()
            threeRemove()
            fourRemove()
            e.target.classList.add("active")
            selectPlanAppear()
           
        }else if(targetId =="3"){
            e.target.classList.add("active")
            twoRemove()
            oneRemove()
            fourRemove()
           addOnsAppear()
        }else{
            e.target.classList.add("active")
            twoRemove()
            oneRemove()
            threeRemove()
            finishingUpAppear()
        }

    })

})



const monthlyPlanContainer = document.querySelector(".monthly-plan-container")
const selectedPlanBill = document.querySelector(".selected-plan-bill")
const selectedPlanText = document.querySelector(".selected-plan")
const arcadePlanText = document.querySelector(".arcadePlanText")
const advancedPlanText = document.querySelector(".advancedPlanText")
const proPlanText = document.querySelector(".proPlanText")

const totalBill = document.querySelector(".totalBill")
const monthllyBillInOnlineService = document.querySelector(".onlineService-month-dollar-number")
const monthllyBillInLargeStorage = document.querySelector(".largerStorage-month-dollar-number")
const monthllyBillInCustomizeProfile = document.querySelector(".customizeProfile-month-dollar-number")

const yearlyBillInOnlineService = document.querySelector(".onlineService-year-dollar-number")
const yearlyBillInLargeStorage = document.querySelector(".largerStorage-year-dollar-number")
const yearlyBillInCustomizeProfile = document.querySelector(".customizeProfile-year-dollar-number")

const arcadeMonthMoney = document.querySelector(".arcade-month-dollar-number")
const proMonthMoney = document.querySelector(".pro-month-dollar-number")
const advanceMonthMoney = document.querySelector(".advanced-month-dollar-number")

// for year
const arcadeYearMoney = document.querySelector(".arcade-year-dollar-number")
const proYearMoney = document.querySelector(".pro-year-dollar-number")
const advanceYearMoney = document.querySelector(".advanced-year-dollar-number")

    /*
    if(arcadePlan.classList.contains("selected") && advancedPlan.classList.contains("selected")){
        console.log("plan plan plan");
        arcadePlan.classList.remove("selected")
        advancedPlan.classList.remove("selected")
        proPlan.removeEventListener("click",removeStyleToProPlan())
    }

    */
    arcadePlan.addEventListener("click",()=>{
        
        if(arcadePlan.classList.contains("selected")){
            
            removeStyleToArcadePlan()
            arcadePlan.classList.remove("selected")
            selectedPlanText.innerHTML = ""
            selectedPlanBill.innerHTML = ""
        }else{
            addStyleToArcadePlan()
            arcadePlan.classList.add("selected")
            
            

            if(circle.classList.contains("yearly")){
                selectedPlanText.innerHTML = arcadePlanText.innerHTML + " (Yearly)"
                selectedPlanBill.innerHTML = `$${Number(arcadeYearMoney.innerHTML)}/yr`
            }else{
                selectedPlanText.innerHTML = arcadePlanText.innerHTML + " (Monthly)"
                selectedPlanBill.innerHTML = `$${Number(arcadeMonthMoney.innerHTML)}/mo`
            }
        }
        
        
        
     })
     
     advancedPlan.addEventListener("click",()=>{
         
        if(advancedPlan.classList.contains("selected")){
            advancedPlan.classList.remove("selected")
            removeStyleToAdvancedPlan()
            selectedPlanText.innerHTML = ""
            selectedPlanBill.innerHTML = ""
        }else{
            addStyleToAdvancedPlan()
            advancedPlan.classList.add("selected")
            if(circle.classList.contains("yearly")){
                selectedPlanText.innerHTML = advancedPlanText.innerHTML + " (Yearly)"
                selectedPlanBill.innerHTML = `$${Number(advanceYearMoney.innerHTML)}/yr`
            }else{
                selectedPlanText.innerHTML = advancedPlanText.innerHTML + " (Monthly)"
                selectedPlanBill.innerHTML = `$${Number(advanceMonthMoney.innerHTML)}/mo`
            }
        }
         
         
     })
     
     proPlan.addEventListener("click",()=>{
        if(proPlan.classList.contains("selected")){
            proPlan.classList.remove("selected")
            removeStyleToProPlan()
            selectedPlanText.innerHTML = ""
            selectedPlanBill.innerHTML = ""
        }else{
            addStyleToProPlan()
            proPlan.classList.add("selected")
            if(circle.classList.contains("yearly")){
                selectedPlanText.innerHTML = proPlanText.innerHTML + " (Yearly)"
                selectedPlanBill.innerHTML = `$${Number(proYearMoney.innerHTML)}/yr`
            }else{
                selectedPlanText.innerHTML = proPlanText.innerHTML + " (Monthly)"
                selectedPlanBill.innerHTML = `$${Number(proMonthMoney.innerHTML)}/mo`
            }
            
        }
     })


     
//this is for add-ons page
const checkBox = document.querySelector(".checkboxStyle")
const checkboxContainer = document.querySelector(".checkboxContainer")
const checkIcon = document.querySelector(".fa-solid")

const checkBox1 = document.querySelector(".checkboxStyle1")
const checkboxContainer1 = document.querySelector(".checkboxContainer1")
const checkIcon1 = document.querySelector(".largerIcon")

const checkBox2 = document.querySelector(".checkboxStyle2")
const checkboxContainer2 = document.querySelector(".checkboxContainer2")
const checkIcon2 = document.querySelector(".customizeIcon")

const onlineService = document.querySelector(".onlineService")
const largerStorage = document.querySelector(".largerStorage")
const customizableProfile = document.querySelector(".customizableProfile")

const addOnsPlan1 = document.querySelector(".firstP") 
const addOnsPlan2 = document.querySelector(".secondP") 
const addOnsPlan3 = document.querySelector(".thirdP") 

const changeServiceText = document.querySelector(".service")
const changeServiceText1 = document.querySelector(".service1")
const changeServiceText2 = document.querySelector(".service2")

const firstBill = document.querySelector(".firstBill")
const secondBill = document.querySelector(".secondBill")
const thirdBill = document.querySelector(".thirdBill")



// online service selected method
onlineService.addEventListener("click",()=>{
    if(checkBox.classList.contains("checked")){
        checkBox.style.backgroundColor = "inherit"
        checkIcon.style.zIndex = "0"
        onlineService.style.borderColor = "rgb(218, 211, 211)"
        onlineService.classList.remove("selected")
        checkBox.classList.remove("checked")
        addOnsPlan1.innerHTML = ""
        firstBill.innerHTML = ""
    }else{
        checkBox.classList.add("checked")
        onlineService.classList.add("selected")
        checkBox.style.backgroundColor = "hsl(243, 100%, 62%)"
        checkIcon.style.zIndex = "1"
        onlineService.style.borderColor = "hsl(213, 96%, 18%)"
        if(circle.classList.contains("yearly")){
            addOnsPlan1.innerHTML = changeServiceText.innerHTML
            firstBill.innerHTML = `+$${yearlyBillInOnlineService.innerHTML}/yr`
        }else{
            addOnsPlan1.innerHTML = changeServiceText.innerHTML
            firstBill.innerHTML =`+$${monthllyBillInOnlineService.innerHTML}/mo`
            
        }

       
    }
})

//larger storge selected method
largerStorage.addEventListener("click",()=>{
    if(checkBox1.classList.contains("checked")){
        checkBox1.style.backgroundColor = "inherit"
        checkIcon1.style.zIndex = "0"
        largerStorage.style.borderColor = "rgb(218, 211, 211)"
        largerStorage.classList.remove("selected")
        checkBox1.classList.remove("checked")
        addOnsPlan2.innerHTML = ""
        secondBill.innerHTML = ""
    }else{
        checkBox1.classList.add("checked")
        largerStorage.classList.add("selected")
        checkBox1.style.backgroundColor = "hsl(243, 100%, 62%)"
        checkIcon1.style.zIndex = "1"
        largerStorage.style.borderColor = "hsl(213, 96%, 18%)"

        if(circle.classList.contains("yearly")){
            addOnsPlan2.innerHTML = changeServiceText1.innerHTML
            secondBill.innerHTML = `+$${yearlyBillInLargeStorage.innerHTML}/yr`
        }else{
            addOnsPlan2.innerHTML = changeServiceText1.innerHTML
            secondBill.innerHTML = `+$${monthllyBillInLargeStorage.innerHTML}/mo`
            
        }
        
    }
})


// customizable profile selected method
customizableProfile.addEventListener("click",()=>{
    if(checkBox2.classList.contains("checked")){
        checkBox2.style.backgroundColor = "inherit"
        checkIcon2.style.zIndex = "0"
        customizableProfile.style.borderColor = "rgb(218, 211, 211)"
        customizableProfile.classList.remove("selected")
        checkBox2.classList.remove("checked")
        addOnsPlan3.innerHTML = ""
        thirdBill.innerHTML = ""
    }else{
        checkBox2.classList.add("checked")
        customizableProfile.classList.add("selected")
        checkBox2.style.backgroundColor = "hsl(243, 100%, 62%)"
        checkIcon2.style.zIndex = "1"
        customizableProfile.style.borderColor = "hsl(213, 96%, 18%)"
        if(circle.classList.contains("yearly")){
            addOnsPlan3.innerHTML = changeServiceText2.innerHTML
            thirdBill.innerHTML = `+$${yearlyBillInCustomizeProfile.innerHTML}/yr`
        }else{
            addOnsPlan3.innerHTML = changeServiceText2.innerHTML
            thirdBill.innerHTML = `+$${monthllyBillInCustomizeProfile.innerHTML}/mo`
            
        }
    }
})





const totalText= document.querySelector(".TotalText")

nextStepInAddOnsTab.addEventListener("click",()=>{
    
    
    

    if(circle.classList.contains("yearly")){
        totalText.innerHTML = "Total (per year)"
        let changeSecondBill =Number(secondBill.innerHTML.slice(2,4))
        let changeFirstBill =Number(firstBill.innerHTML.slice(2,4))
        let changeThirdBill =Number(thirdBill.innerHTML.slice(2,4))
        if(selectedPlanBill.innerHTML.length > 6){
            console.log(changeSecondBill);
            let changeArcadePlanBill = Number(selectedPlanBill.innerHTML.slice(1,4))
            totalBill.innerHTML = `$${changeFirstBill + changeSecondBill + changeArcadePlanBill + changeThirdBill}/yr`
        }else{
            let changeArcadePlanBill1 =Number(selectedPlanBill.innerHTML.slice(1,3))
            totalBill.innerHTML = `$${changeFirstBill + changeSecondBill + changeArcadePlanBill1 + changeThirdBill}/yr`
        }
    }else{
        totalText.innerHTML = "Total (per month)"
        let changeSecondBill =Number(secondBill.innerHTML.charAt(2))
        let changeFirstBill =Number(firstBill.innerHTML.charAt(2))
        let  changeThirdBill =Number(thirdBill.innerHTML.charAt(2))

        if(selectedPlanBill.innerHTML.length > 5){
            
            let changeArcadePlanBill =Number(selectedPlanBill.innerHTML.slice(1,3))
            console.log(firstBill.innerHTML);changeThirdBill
            totalBill.innerHTML = `$${changeFirstBill + changeSecondBill + changeArcadePlanBill + changeThirdBill}/mo`
        }else{
            
            let changeArcadePlanBill1 =Number(selectedPlanBill.innerHTML.charAt(1))
            totalBill.innerHTML = `$${changeFirstBill + changeSecondBill + changeArcadePlanBill1 + changeThirdBill}/mo`
        }
    }
   //totalBill.innerHTML = `$${changeFirstBill + changeSecondBill + changeArcadePlanBill}/mo`
    
    // console.log(changeArcadePlanBill);
    


   if((onlineService.classList.contains("selected") || largerStorage.classList.contains("selected")) || customizableProfile.classList.contains("selected")){
        finishingUpAppear()
        const numberFour = document.querySelector(".four")
        numberFour.classList.add("active")
        oneRemove()
        twoRemove()
        threeRemove()
   }
})

//goback click in add-ons page
gobackInAddOnsTab.addEventListener("click",()=>{
    const numberTwo = document.querySelector(".two")
    numberTwo.classList.add("active")
    oneRemove()
    threeRemove()
    fourRemove()
    selectPlanAppear()

})



//Next step in finishing up

nextStepInFinishingUp.addEventListener("click",()=>{
    if(totalBill.innerHTML == ""){
        console.log("need to pick plan");
    }else{
        thankyouAppear()
    }
})    


//
const goBackInFinishUp = document.querySelector(".goBackInFinishUp")


goBackInFinishUp.addEventListener("click",()=>{
    const numberThree = document.querySelector(".three")
    numberThree.classList.add("active")
    oneRemove()
    fourRemove()
    twoRemove()
    addOnsAppear()
    totalBill.innerHTML= ""
    firstBill.innerHTML = ""
    secondBill.innerHTML = ""
    thirdBill.innerHTML = ""
    selectedPlanBill.innerHTML = ""
})

//this function is for arcade plan remove and add style
function addStyleToArcadePlan (){
    
   arcadePlan.style.border = "0.126rem solid hsl(243, 100%, 62%)"
}
function removeStyleToArcadePlan (){
    arcadePlan.style.backgroundColor = "inherit"
   arcadePlan.style.border = "0.1rem solid rgb(218, 211, 211)"
}

//this function is for advanced plan remove and add style
function addStyleToAdvancedPlan (){
    
   advancedPlan.style.border = "0.126rem solid hsl(243, 100%, 62%)"
}
function removeStyleToAdvancedPlan (){
    advancedPlan.style.backgroundColor = "inherit"
   advancedPlan.style.border = " 0.1rem solid rgb(218, 211, 211)"
}

//this function is for pro plan remove and add style
function addStyleToProPlan (){
    
   proPlan.style.border = "0.13rem solid hsl(243, 100%, 62%)"
}
function removeStyleToProPlan (){
    proPlan.style.backgroundColor = "inherit"
   proPlan.style.border = "0.1rem solid rgb(218, 211, 211)"
}

function twoRemove(){
    let removeTwo = document.querySelector(".two")
    if (removeTwo.classList.contains("active")) {
           removeTwo.classList.remove("active")
    }       
}

function oneRemove(){
    let removeOne = document.querySelector(".one")
            if (removeOne.classList.contains("active")) {
                removeOne.classList.remove("active")
            }
}

function threeRemove(){
    let removeThree = document.querySelector(".three")
            if (removeThree.classList.contains("active")) {
                removeThree.classList.remove("active")
            }
}
function fourRemove(){
    let removeFour = document.querySelector(".four")
            if (removeFour.classList.contains("active")) {
                removeFour.classList.remove("active")
            }
}


function yourInfoAppear(){
    SELECT_PLAN.style.display = "none"
    ADD_ONS.style.display="none"
    FINISHING_UP.style.display="none"
    THANK_CONTAINER.style.display = "none"
                setTimeout(()=>{
                    PERSONAL_INFO.style.display="flex"
            },200)
}

function selectPlanAppear(){
    PERSONAL_INFO.style.display = "none"
    ADD_ONS.style.display="none"
    FINISHING_UP.style.display="none"
    THANK_CONTAINER.style.display = "none"
    setTimeout(()=>{
        SELECT_PLAN.style.display="flex"
    },200)
}

function addOnsAppear(){
    SELECT_PLAN.style.display = "none"
    PERSONAL_INFO.style.display = "none"
    FINISHING_UP.style.display="none"
    THANK_CONTAINER.style.display = "none"
    setTimeout(()=>{
        ADD_ONS.style.display="flex"
    },110)
}


function finishingUpAppear(){
    SELECT_PLAN.style.display = "none"
    PERSONAL_INFO.style.display = "none"
    ADD_ONS.style.display="none"
    THANK_CONTAINER.style.display = "none"
    setTimeout(()=>{
        FINISHING_UP.style.display="flex"
    },110)
}

function thankyouAppear(){
    SELECT_PLAN.style.display = "none"
    PERSONAL_INFO.style.display = "none"
    ADD_ONS.style.display="none"
    FINISHING_UP.style.display="none"
    setTimeout(()=>{
        THANK_CONTAINER.style.display = "flex"
    },110)
}