/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.centrale.astrolab.saturne.repositories;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;
import org.centrale.astrolab.saturne.controllers.Security;
import org.centrale.astrolab.saturne.items.Person;
import org.centrale.astrolab.saturne.items.Question;
import org.centrale.astrolab.saturne.items.Statusrights;
import org.centrale.astrolab.saturne.items.Typequestion;
import org.centrale.astrolab.saturne.tools.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

/**
 *
 * @author pgrou
 */
@Repository
public class QuestionRepositoryCustomImpl implements QuestionRepositoryCustom {

    @Autowired
    @Lazy
    QuestionRepository questionRepository;
    
    @Override
    public Question create(String typequestionStr, boolean estprivee) {
        Date now = Utilities.getCurrentTime();
        Question question = new Question();
        question.setEnonce("");
        question.setDatecreationquestion(now);
        question.setEstprivee(estprivee);
        questionRepository.save(question);
        return Question.get();
    }
    
}
