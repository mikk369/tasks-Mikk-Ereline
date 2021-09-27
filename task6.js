
function repS(info, mitu) {
    let result = "";

    for (let i = 1; i <= mitu; i++) {
        result += info;
    }
    console.log(result);
}

{
    repS("Hello!", 2);
    repS("Hello!", 3);
    repS("Hello!", 12);

    console.log("Hi!")

    // Muuda olemasolevat funktsiooni nii, et kui n väärtus on üle 10-ne, siis ta kasutaks samuti ‘Hi!’ vastav arv kordi.
    //  siin minu mõistus lõppeb ,seda punkti ei oska teha

}

