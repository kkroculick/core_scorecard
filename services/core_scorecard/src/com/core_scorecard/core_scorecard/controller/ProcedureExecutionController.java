/*American Express*/

package com.core_scorecard.core_scorecard.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Qualifier;
import com.core_scorecard.core_scorecard.service.Core_scorecardProcedureExecutorService;
import com.wavemaker.runtime.data.model.CustomProcedure;
import com.wavemaker.runtime.data.exception.QueryParameterMismatchException;
import com.wordnik.swagger.annotations.*;
import com.wavemaker.tools.api.core.annotations.WMAccessVisibility;
import com.wavemaker.tools.api.core.models.AccessSpecifier;

@RestController(value = "Core_scorecard.ProcedureExecutionController")
@RequestMapping("/core_scorecard/procedureExecutor")
@Api(description = "Controller class for procedure execution", value = "ProcedureExecutionController")
public class ProcedureExecutionController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ProcedureExecutionController.class);

    @Autowired
    private Core_scorecardProcedureExecutorService procedureService;

    @RequestMapping(value = "/procedure/execute/wm_custom", method = RequestMethod.POST)
    @ApiOperation(value = "Process request to execute custom Procedure")
    public List<Object> executeWMCustomProcedure(@RequestBody CustomProcedure procedure) {
        List<Object> result = procedureService.executeWMCustomProcedure(procedure);
        LOGGER.debug("got the result {}" + result);
        return result;
    }
}
