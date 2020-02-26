function creerQuestion(ref){
    //Creer un QCM
    var selQCM = document.getElementsByName("qcm")[0];
    var indexQCM = selQCM.selectedIndex;
    $.ajax({
        url:"creerQuestion.do",
        data: {
            enonce: document.getElementsByName("enonce")[0].value,
            //dateCreationQuestion: document.getElementsByName("dateCreationQuestion")[0].value,
            estPrivee: document.getElementsByName("estPrivee")[0].value,
            qcmid: selQCM.options[indexQCM].value
        },
        method: 'POST',
        success: function(result){
            var divRef = getNextParentTag(ref,"DIV");
            deleteAll(divRef);
            var h1 = document.createElement("H1");
            h1.appendChild(document.createTextNode("Ajoutez les réponses à votre question"));
            divRef.appendChild(h1);
            var table = document.createElement("TABLE");
            for (let i = 0; i < result.questions.length; i++){
                var tr = document.createElement("TR");
                var td2 = document.createElement("TD");
                var input = document.createElement("INPUT");
                input.setAttribute("value","");
                input.setAttribute("name","enonceReponse");
                input.setAttribute("type","text");
                var input = document.createElement("INPUT");
                input.setAttribute("value","0");
                input.setAttribute("name","correcte");
                input.setAttribute("type","boolean");
                var td3 = document.createElement("TD");
                var bouton = document.createElement("BUTTON");
                bouton.textContent="Ajouter des réponses";
                bouton.setAttribute("onClick","creerReponse(this)");
                /*
                var cache = document.createElement("INPUT");
                cache.setAttribute("type","hidden");
                cache.setAttribute("value",result.questions[i].contenuQuiz);
                cache.setAttribute("name","idCQ");
                td3.appendChild(cache);
                td3.appendChild(input);
                 */
                var divRef = getNextParentTag(ref,"DIV");
                deleteAll(divRef);
                var form = document.createElement("FORM");
                var bouton2 = document.createElement("BUTTON");
                bouton2.textContent="Valider";
                form.setAttribute("action","valider.do");
                form.setAttribute("method","POST");
                form.appendChild(bouton);
                var h1 = document.createElement("H1");
                h1.textContent="Vous avez fini de créer votre question, pour revenir au menu appuyez sur le bouton ci dessous.";
                divRef.appendChild(h1);
                divRef.appendChild(form);
                console.log("Youpi");
            }
            divRef.appendChild(table);
        },
        error: function(resultat, statut, erreur){
            console.log(resultat.responseText);
            
        }
    });
}

function creerReponse(ref){
    //Créer un QCMRep
    var selQCMRep = document.getElementsByName("qcmrep")[0];
    var indexQCMRep = selQCMRep.selectedIndex;
    $.ajax({
        url:"creerReponse.do",
        data: {
            correcte: document.getElementsByName("correcte")[0].value,
            qcmrepid: selQCMRep.options[indexQCMRep].value
        },
        method: 'POST',
        success: function(result){
            var divRef = getNextParentTag(ref,"DIV");
            deleteAll(divRef);
            var form = document.createElement("FORM");
            var bouton = document.createElement("BUTTON");
            bouton.textContent="Revenir au menu";
            form.setAttribute("action","valider.do");
            form.setAttribute("method","POST");
            form.appendChild(/* ??? */);
            var h1 = document.createElement("H1");
            h1.textContent="Vous avez fini de créer votre réponse, pour revenir au menu appuyez sur le bouton ci dessous.";
            divRef.appendChild(h1);
            divRef.appendChild(form);
            console.log("Youpi");
            
        },
        error: function(resultat, statut, erreur){
            console.log(resultat.responseText);
            
        }
    });
}

function deleteAll(ref){
    while (ref.firstChild !== null){
        ref.removeChild(ref.firstChild);
    }
}

function getNextParentTag(currentElement, tagName) {
    // nodeType=1 is TAG = <p> <div> <tr> ...
    while ((currentElement !== null) && ((currentElement.nodeType !== 1 )
        || (currentElement.tagName!== tagName))){
            currentElement = currentElement.parentNode;
    }
    return currentElement;
}