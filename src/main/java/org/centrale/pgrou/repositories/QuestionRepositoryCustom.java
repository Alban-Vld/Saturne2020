/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.centrale.astrolab.saturne.repositories;

import org.centrale.astrolab.saturne.items.Person;
import org.centrale.astrolab.saturne.items.Question;

/**
 *
 * @author pgrou
 */
public interface QuestionRepositoryCustom {
    /**
     * Create new Question
     * @param typequestionStr
     * @param estprivee
     * @return 
     */
    public Question create(String typequestionStr, boolean estprivee);

}

