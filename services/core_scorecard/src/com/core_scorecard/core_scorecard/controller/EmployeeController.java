/*Generated by WaveMaker Studio*/

package com.core_scorecard.core_scorecard.controller;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/
import com.core_scorecard.core_scorecard.service.EmployeeService;
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
 * Controller object for domain model class Employee.
 * @see com.core_scorecard.core_scorecard.Employee
 */
@RestController(value = "Core_scorecard.EmployeeController")
@RequestMapping("/core_scorecard/Employee")
@Api(description = "Exposes APIs to work with Employee resource.", value = "EmployeeController")
public class EmployeeController {

    private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    @Qualifier("core_scorecard.EmployeeService")
    private EmployeeService employeeService;

    /**
	 * This setter method should only be used by unit tests
	 * 
	 * @param service
	 */
    protected void setEmployeeService(EmployeeService service) {
        this.employeeService = service;
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Creates a new Employee instance.")
    public Employee createEmployee(@RequestBody Employee instance) {
        LOGGER.debug("Create Employee with information: {}", instance);
        instance = employeeService.create(instance);
        LOGGER.debug("Created Employee with information: {}", instance);
        return instance;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Returns the list of Employee instances.")
    public Page<Employee> getEmployees(Pageable pageable) {
        LOGGER.debug("Rendering Employees list");
        return employeeService.findAll(pageable);
    }

    @RequestMapping(value = "/{id:.+}", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Returns the Employee instance associated with the given id.")
    public Employee getEmployee(@PathVariable(value = "id") Integer id) throws EntityNotFoundException {
        LOGGER.debug("Getting Employee with id: {}", id);
        Employee instance = employeeService.findById(id);
        LOGGER.debug("Employee details with id: {}", instance);
        return instance;
    }

    @RequestMapping(value = "/{id:.+}", method = RequestMethod.DELETE)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Deletes the Employee instance associated with the given id.")
    public boolean deleteEmployee(@PathVariable(value = "id") Integer id) throws EntityNotFoundException {
        LOGGER.debug("Deleting Employee with id: {}", id);
        Employee deleted = employeeService.delete(id);
        return deleted != null;
    }

    @RequestMapping(value = "/{id:.+}", method = RequestMethod.PUT)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Updates the Employee instance associated with the given id.")
    public Employee editEmployee(@PathVariable(value = "id") Integer id, @RequestBody Employee instance) throws EntityNotFoundException {
        LOGGER.debug("Editing Employee with id: {}", instance.getId());
        instance.setId(id);
        instance = employeeService.update(instance);
        LOGGER.debug("Employee details with id: {}", instance);
        return instance;
    }

    @RequestMapping(value = "/search", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Returns the list of Employee instances matching the search criteria.")
    public Page<Employee> findEmployees(Pageable pageable, @RequestBody QueryFilter[] queryFilters) {
        LOGGER.debug("Rendering Employees list");
        return employeeService.findAll(queryFilters, pageable);
    }

    @RequestMapping(value = "/count", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    @ApiOperation(value = "Returns the total count of Employee instances.")
    public Long countAllEmployees() {
        LOGGER.debug("counting Employees");
        Long count = employeeService.countAll();
        return count;
    }
}
