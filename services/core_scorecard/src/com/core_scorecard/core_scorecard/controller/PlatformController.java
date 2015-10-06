/*Generated by WaveMaker Studio*/

package com.core_scorecard.core_scorecard.controller;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/
import com.core_scorecard.core_scorecard.service.PlatformService;
import java.io.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.hibernate.TypeMismatchException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import com.wavemaker.runtime.data.exception.EntityNotFoundException;
import com.wavemaker.runtime.data.expression.QueryFilter;
import com.wavemaker.runtime.util.WMMultipartUtils;
import com.wavemaker.runtime.util.WMRuntimeUtils;
import com.wordnik.swagger.annotations.*;
import com.core_scorecard.core_scorecard.*;
import com.core_scorecard.core_scorecard.service.*;
import com.wavemaker.tools.api.core.annotations.WMAccessVisibility;
import com.wavemaker.tools.api.core.models.AccessSpecifier;

/**
 * Controller object for domain model class Platform.
 * @see com.core_scorecard.core_scorecard.Platform
 */
@RestController(value = "Core_scorecard.PlatformController")
@RequestMapping("/core_scorecard/Platform")
@Api(description = "Exposes APIs to work with Platform resource.", value = "PlatformController")
public class PlatformController {

    private static final Logger LOGGER = LoggerFactory.getLogger(PlatformController.class);

    @Autowired
    @Qualifier("core_scorecard.PlatformService")
    private PlatformService platformService;

    @RequestMapping(value = "/search", method = RequestMethod.POST)
    @ApiOperation(value = "Returns the list of Platform instances matching the search criteria.")
    public Page<Platform> findPlatforms(Pageable pageable, @RequestBody QueryFilter[] queryFilters) {
        LOGGER.debug("Rendering Platforms list");
        return platformService.findAll(queryFilters, pageable);
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ApiOperation(value = "Returns the list of Platform instances.")
    public Page<Platform> getPlatforms(Pageable pageable) {
        LOGGER.debug("Rendering Platforms list");
        return platformService.findAll(pageable);
    }

    @RequestMapping(value = "/{id:.+}", method = RequestMethod.GET)
    @ApiOperation(value = "Returns the Platform instance associated with the given id.")
    public Platform getPlatform(@PathVariable("id") Integer id) throws EntityNotFoundException {
        LOGGER.debug("Getting Platform with id: {}", id);
        Platform instance = platformService.findById(id);
        LOGGER.debug("Platform details with id: {}", instance);
        return instance;
    }

    @RequestMapping(value = "/{id:.+}", method = RequestMethod.DELETE)
    @ApiOperation(value = "Deletes the Platform instance associated with the given id.")
    public boolean deletePlatform(@PathVariable("id") Integer id) throws EntityNotFoundException {
        LOGGER.debug("Deleting Platform with id: {}", id);
        Platform deleted = platformService.delete(id);
        return deleted != null;
    }

    @RequestMapping(value = "/{id:.+}", method = RequestMethod.PUT)
    @ApiOperation(value = "Updates the Platform instance associated with the given id.")
    public Platform editPlatform(@PathVariable("id") Integer id, @RequestBody Platform instance) throws EntityNotFoundException {
        LOGGER.debug("Editing Platform with id: {}", instance.getId());
        instance.setId(id);
        instance = platformService.update(instance);
        LOGGER.debug("Platform details with id: {}", instance);
        return instance;
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    @ApiOperation(value = "Creates a new Platform instance.")
    public Platform createPlatform(@RequestBody Platform instance) {
        LOGGER.debug("Create Platform with information: {}", instance);
        instance = platformService.create(instance);
        LOGGER.debug("Created Platform with information: {}", instance);
        return instance;
    }

    /**
	 * This setter method should only be used by unit tests
	 * 
	 * @param service
	 */
    protected void setPlatformService(PlatformService service) {
        this.platformService = service;
    }

    @RequestMapping(value = "/count", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Returns the total count of Platform instances.")
    public Long countAllPlatforms() {
        LOGGER.debug("counting Platforms");
        Long count = platformService.countAll();
        return count;
    }
}