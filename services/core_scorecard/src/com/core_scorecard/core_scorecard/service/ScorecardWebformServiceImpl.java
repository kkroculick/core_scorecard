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
 * ServiceImpl object for domain model class ScorecardWebform.
 * @see com.core_scorecard.core_scorecard.ScorecardWebform
 */
@Service("core_scorecard.ScorecardWebformService")
public class ScorecardWebformServiceImpl implements ScorecardWebformService {


    private static final Logger LOGGER = LoggerFactory.getLogger(ScorecardWebformServiceImpl.class);

    @Autowired
    @Qualifier("core_scorecard.ScorecardWebformDao")
    private WMGenericDao<ScorecardWebform, Integer> wmGenericDao;
    public void setWMGenericDao(WMGenericDao<ScorecardWebform, Integer> wmGenericDao){
        this.wmGenericDao = wmGenericDao;
    }
     @Transactional(readOnly = true, value = "core_scorecardTransactionManager")
     public Page<ScorecardWebform> findAssociatedValues(Object value, String entityName, String key,  Pageable pageable){
          LOGGER.debug("Fetching all associated");
          return this.wmGenericDao.getAssociatedObjects(value, entityName, key, pageable);
     }

    @Transactional(value = "core_scorecardTransactionManager")
    @Override
    public ScorecardWebform create(ScorecardWebform scorecardwebform) {
        LOGGER.debug("Creating a new scorecardwebform with information: {}" , scorecardwebform);
        return this.wmGenericDao.create(scorecardwebform);
    }

    @Transactional(rollbackFor = EntityNotFoundException.class, value = "core_scorecardTransactionManager")
    @Override
    public ScorecardWebform delete(Integer scorecardwebformId) throws EntityNotFoundException {
        LOGGER.debug("Deleting scorecardwebform with id: {}" , scorecardwebformId);
        ScorecardWebform deleted = this.wmGenericDao.findById(scorecardwebformId);
        if (deleted == null) {
            LOGGER.debug("No scorecardwebform found with id: {}" , scorecardwebformId);
            throw new EntityNotFoundException(String.valueOf(scorecardwebformId));
        }
        this.wmGenericDao.delete(deleted);
        return deleted;
    }

    @Transactional(readOnly = true, value = "core_scorecardTransactionManager")
    @Override
    public Page<ScorecardWebform> findAll(QueryFilter[] queryFilters, Pageable pageable) {
        LOGGER.debug("Finding all scorecardwebforms");
        return this.wmGenericDao.search(queryFilters, pageable);
    }
    
    @Transactional(readOnly = true, value = "core_scorecardTransactionManager")
    @Override
    public Page<ScorecardWebform> findAll(Pageable pageable) {
        LOGGER.debug("Finding all scorecardwebforms");
        return this.wmGenericDao.search(null, pageable);
    }

    @Transactional(readOnly = true, value = "core_scorecardTransactionManager")
    @Override
    public ScorecardWebform findById(Integer id) throws EntityNotFoundException {
        LOGGER.debug("Finding scorecardwebform by id: {}" , id);
        ScorecardWebform scorecardwebform=this.wmGenericDao.findById(id);
        if(scorecardwebform==null){
            LOGGER.debug("No scorecardwebform found with id: {}" , id);
            throw new EntityNotFoundException(String.valueOf(id));
        }
        return scorecardwebform;
    }
    @Transactional(rollbackFor = EntityNotFoundException.class, value = "core_scorecardTransactionManager")
    @Override
    public ScorecardWebform update(ScorecardWebform updated) throws EntityNotFoundException {
        LOGGER.debug("Updating scorecardwebform with information: {}" , updated);
        this.wmGenericDao.update(updated);
        return this.wmGenericDao.findById((Integer)updated.getId());
    }

    @Transactional(readOnly = true, value = "core_scorecardTransactionManager")
    @Override
    public long countAll() {
        return this.wmGenericDao.count();
    }
}


