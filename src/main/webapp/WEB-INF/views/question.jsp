<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>

<html>
    <head>
        <title>Créer une question </title>
        <meta charset="UTF-8"/> 
        <link href="css/question.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/question.js"></script>
        <script type="text/javascript" src="js/jquery-3.4.1.js"></script>
    </head>
    <body>
        <header> </header>
        <div id="gauche" class="box"> 
            <h1> Liste des questions déjà crées </h1>
            <table>
                <tr> 
                    <th> Enoncé </th>
                    <th> Date de création de la question </th>
                    <th> Privée </th>
                </tr>
                <c:forEach var="question" items="${listQuestion}">
                    <tr>
                        <th>${question.enonce}</th>
                        <th>${question.dateCreationQuestion}</th>
                        <th>${question.estPrivee}</th>
                        <th>
                            <form action="delete.do" method="POST">
                                <input type ="hidden" name="id" value="${question.questionId}" />
                                <button><img src="img/delete.png" alt="delete" height="20" /></button>
                            </form>
                        </th>
                    </tr>                    
                </c:forEach>
            </table>
        </div>
        <div id="centre" class="box">
            <h1> Créer une question </h1>
            <table>
                <tr> 
                    <td>Ecrivez l'énoncé :</td>
                    <td><input name="enonce" type="text"/></td>
                    <td>La question est elle privée ? </td>
                    <div>
					  <input type="radio" id="yes" name="estPrivee">
					  <label for="yes">Oui</label>
					</div>
					<div>
					  <input type="radio" id="no" name="estPrivee" checked>
					  <label for="no">Non</label>
					</div>
                </tr>
				<tr>   
                    <td>Choisissez les réponses :</td>
                    <td><select name="reponse"> 
                            <c:forEach var="reponse" items="${listReponses}">
                                    <option value="${reponse.reponseId}" />
                            </c:forEach>
                </select></td>
                </tr>
            </table>
            <button type="submit" onClick="creerQuestion(this);">Valider</button>
        </div>
        <div id="droite" class="box"> 
        </div>
        <footer></footer>
    </body>
</html>