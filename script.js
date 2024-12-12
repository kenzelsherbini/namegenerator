//generate prefix
function genPrefix (firstName){
    if (firstName.length > 5)
    return 'The Great'
} else {
    return `Master`
}

//generate first name
function genFirstName(firstName){
    const firstLetter = firstName.charAt(0).toLowerCase ()
    if (firstLetter === `a`){
        return `Jeff`
    } else if (firstLetter === `b`){
        return `Pablo`
    }else{
        return `Julian`
    }
}

//generate middle name 
function genMiddleName (roadType, favoriteColor){
    if(roadType === `road`){
        return`${favoriteColor}ridge` //ex: blueridge
    } else if (roadType === `street`){
        return `${favoriteColor}son` //EX BLUESON   
    } else {
        return `${favoriteColor}stone`
    }
}

//generate last name
function genLastName (lastName){
    const lastLetter = lastName.charAt(lastName.length - 1)
    if (lastLetter === `a`){
        return `Shadow`
    } else if (lastLetter === `e`){
        return `Blaze`
    } else if (lastLetter === `n`){
        return `Thorn`
    } else if (lastLetter === `u`){
        return `Frost`
    } else {
        return `moon`
    }
}

//generate suffix
function genSuffix (favoriteAnimal){
    return `of ${favoriteAnimal} clan`
}

//master name building function
function genFullName(){
    //get users input from html elements
    const firstName = document.getElementById(`firstName`).value.trim()
    const lastName = document.getElementById(`lastName`).value.trim()
    const roadType = document.getElementById(`roadType`).value
    const favoriteColor = document.getElementById(`favoriteColor`).value.trim()
    const favoriteAnimal = document.getElementById(`favoriteAnimal`).value.trim()

    //run name generating functions in new variables
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genFirstName(lastName)
    const suffix= genSuffix(favoriteAnimal)

    //capitalize name variables when needed 
    const capitalizedPrefix = capitalize(prefix)
    const capitalizedFirstName = capitalize(firstName)
    const capitalizedMiddleName = capitalize(middleName)
    const capitalizedNewLastName = capitalize(newLastName)

    //combine all of the new variables in a new name

    //display the new name 


}

//capitilizatino function 
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}