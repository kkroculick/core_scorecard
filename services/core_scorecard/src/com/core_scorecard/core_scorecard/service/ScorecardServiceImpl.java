/*Generated by WaveMaker Studio*/

package com.core_scorecard.core_scorecard.service;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/




import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.wavemaker.runtime.data.dao.*;
import com.wavemaker.runtime.data.expression.QueryFilter;
import com.wavemaker.runtime.data.exception.EntityNotFoundException;

import com.core_scorecard.core_scorecard.*;


/**
 * ServiceImpl object for domain model class Scorecard.
 * @see com.core_scorecard.core_scorecard.Scorecard
 */
@Service("core_scorecard.ScorecardService")
public class ScorecardServiceImpl implements ScorecardService {


    private static final Logger LOGGER = LoggerFactory.getLogger(ScorecardServiceImpl.class);

    @Autowired
    @Qualifier("core_scorecard.ScorecardDao")
    private WMGenericDao<Scorecard, Integer> wmGenericDao;
    public void setWMGenericDao(WMGenericDao<Scorecard, Integer> wmGenericDao){
        this.wmGenericDao = wmGenericDao;
    }
     @Transactional(readOnly = true, value = "core_scorecardTransactionManager")
     public Page<Scorecard> findAssociatedValues(Object value, String entityName, String key,  Pageable pageable){
          LOGGER.debug("Fetching all associated");
          return this.wmGenericDao.getAssociatedObjects(value, entityName, key, pageable);
     }

    @Transactional(value = "core_scorecardTransactionManager")
    @Override
    public Scorecard create(Scorecard scorecard) {
        LOGGER.debug("Creating a new scorecard with information: {}" , scorecard);
        return this.wmGenericDao.create(scorecard);
    }

    @Transactional(rollbackFor = EntityNotFoundException.class, value = "core_scorecardTransactionManager")
    @Override
    public Scorecard delete(Integer scorecardId) throws EntityNotFoundException {
        LOGGER.debug("Deleting scorecard with id: {}" , scorecardId);
        Scorecard deleted = this.wmGenericDao.findById(scorecardId);
        if (deleted == null) {
            LOGGER.debug("No scorecard found with id: {}" , scorecardId);
            throw new EntityNotFoundException(String.valueOf(scorecardId));
        }
        this.wmGenericDao.delete(deleted);
        return deleted;
    }

    @Transactional(readOnly = true, value = "core_scorecardTransactionManager")
    @Override
    public Page<Scorecard> findAll(QueryFilter[] queryFilters, Pageable pageable) {
        LOGGER.debug("Finding all scorecards");
        return this.wmGenericDao.search(queryFilters, pageable);
    }
    
    @Transactional(readOnly = true, value = "core_scorecardTransactionManager")
    @Override
    public Page<Scorecard> findAll(Pageable pageable) {
        LOGGER.debug("Finding all scorecards");
        return this.wmGenericDao.search(null, pageable);
    }

    @Transactional(readOnly = true, value = "core_scorecardTransactionManager")
    @Override
    public Scorecard findById(Integer id) throws EntityNotFoundException {
        LOGGER.debug("Finding scorecard by id: {}" , id);
        Scorecard scorecard=this.wmGenericDao.findById(id);
        if(scorecard==null){
            LOGGER.debug("No scorecard found with id: {}" , id);
            throw new EntityNotFoundException(String.valueOf(id));
        }
        return scorecard;
    }
    @Transactional(rollbackFor = EntityNotFoundException.class, value = "core_scorecardTransactionManager")
    @Override
    public Scorecard update(Scorecard updated) throws EntityNotFoundException {
        LOGGER.debug("Updating scorecard with information: {}" , updated);
        this.wmGenericDao.update(updated);
        return this.wmGenericDao.findById((Integer)updated.getId());
    }

    @Transactional(readOnly = true, value = "core_scorecardTransactionManager")
    @Override
    public long countAll() {
        return this.wmGenericDao.count();
    }
}


