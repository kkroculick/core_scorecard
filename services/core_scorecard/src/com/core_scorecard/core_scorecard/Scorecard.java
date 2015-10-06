/*Generated by WaveMaker Studio*/

package com.core_scorecard.core_scorecard;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;


import java.util.Arrays;

import javax.persistence.Transient;
import javax.persistence.CascadeType;
import javax.persistence.UniqueConstraint;




/**
 * Scorecard generated by hbm2java
 */
@Entity
@Table(name="scorecard"
    ,schema="public"
)
public class Scorecard  implements java.io.Serializable
 {


private Integer id;
private String aetInvestmentStatus;
private Double aetInvestmentStatusScore;
private Double aetInvestmentStatusWeight;
private String aimApplicationsImpacted;
private String companyPlatformsImpacted;
private String endToEnd;
private String gatingScorecardSizing;
private String leadTechnicalArchitect;
private Double numberComponentTechnicalDebt;
private Double numberComponentTechnicalDebtScore;
private Double numberComponentTechnicalDebtWeight;
private Double numberImplementedInitiatives;
private Double numberImplementedInitiativesScore;
private Double numberImplementedInitiativesWeight;
private Double numberPlatforms;
private Double numberPlatformsBlueprints;
private Double numberStrategicInitiativesBpTd;
private Double numberStrategicInitiativesScore;
private Double numberStrategicInitiativesWeight;
private Double numberStrategicInitiatives;
private Double numberStrategicOpportunities;
private Double numberStrategicOpportunitiesBpTd;
private Double numberStrategicOpportunitiesScore;
private Double numberStrategicOpportunitiesWeight;
private Double percentagePortfolioArchitecureImpact;
private String portfolioArchitect;
private String projectComments;
private Double projectCost;
private String projectDescription;
private String projectName;
private Double smartSpendScore;
private Double smartSpendWeight;
private Double sqpImpactCost;
private Double totalSmartSpend;
private Integer employeeId;

    public Scorecard() {
    }



     @Id @GeneratedValue(strategy=IDENTITY)

    

    @Column(name="id", nullable=false)
    public Integer getId() {
        return this.id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }

    

    @Column(name="aet_investment_status", length=20)
    public String getAetInvestmentStatus() {
        return this.aetInvestmentStatus;
    }
    
    public void setAetInvestmentStatus(String aetInvestmentStatus) {
        this.aetInvestmentStatus = aetInvestmentStatus;
    }

    

    @Column(name="aet_investment_status_score", precision=17)
    public Double getAetInvestmentStatusScore() {
        return this.aetInvestmentStatusScore;
    }
    
    public void setAetInvestmentStatusScore(Double aetInvestmentStatusScore) {
        this.aetInvestmentStatusScore = aetInvestmentStatusScore;
    }

    

    @Column(name="aet_investment_status_weight", precision=17)
    public Double getAetInvestmentStatusWeight() {
        return this.aetInvestmentStatusWeight;
    }
    
    public void setAetInvestmentStatusWeight(Double aetInvestmentStatusWeight) {
        this.aetInvestmentStatusWeight = aetInvestmentStatusWeight;
    }

    

    @Column(name="aim_applications_impacted")
    public String getAimApplicationsImpacted() {
        return this.aimApplicationsImpacted;
    }
    
    public void setAimApplicationsImpacted(String aimApplicationsImpacted) {
        this.aimApplicationsImpacted = aimApplicationsImpacted;
    }

    

    @Column(name="company_platforms_impacted")
    public String getCompanyPlatformsImpacted() {
        return this.companyPlatformsImpacted;
    }
    
    public void setCompanyPlatformsImpacted(String companyPlatformsImpacted) {
        this.companyPlatformsImpacted = companyPlatformsImpacted;
    }

    

    @Column(name="end_to_end", length=10)
    public String getEndToEnd() {
        return this.endToEnd;
    }
    
    public void setEndToEnd(String endToEnd) {
        this.endToEnd = endToEnd;
    }

    

    @Column(name="gating_scorecard_sizing")
    public String getGatingScorecardSizing() {
        return this.gatingScorecardSizing;
    }
    
    public void setGatingScorecardSizing(String gatingScorecardSizing) {
        this.gatingScorecardSizing = gatingScorecardSizing;
    }

    

    @Column(name="lead_technical_architect")
    public String getLeadTechnicalArchitect() {
        return this.leadTechnicalArchitect;
    }
    
    public void setLeadTechnicalArchitect(String leadTechnicalArchitect) {
        this.leadTechnicalArchitect = leadTechnicalArchitect;
    }

    

    @Column(name="number_component_technical_debt", precision=17)
    public Double getNumberComponentTechnicalDebt() {
        return this.numberComponentTechnicalDebt;
    }
    
    public void setNumberComponentTechnicalDebt(Double numberComponentTechnicalDebt) {
        this.numberComponentTechnicalDebt = numberComponentTechnicalDebt;
    }

    

    @Column(name="number_component_technical_debt_score", precision=17)
    public Double getNumberComponentTechnicalDebtScore() {
        return this.numberComponentTechnicalDebtScore;
    }
    
    public void setNumberComponentTechnicalDebtScore(Double numberComponentTechnicalDebtScore) {
        this.numberComponentTechnicalDebtScore = numberComponentTechnicalDebtScore;
    }

    

    @Column(name="number_component_technical_debt_weight", precision=17)
    public Double getNumberComponentTechnicalDebtWeight() {
        return this.numberComponentTechnicalDebtWeight;
    }
    
    public void setNumberComponentTechnicalDebtWeight(Double numberComponentTechnicalDebtWeight) {
        this.numberComponentTechnicalDebtWeight = numberComponentTechnicalDebtWeight;
    }

    

    @Column(name="number_implemented_initiatives", precision=17)
    public Double getNumberImplementedInitiatives() {
        return this.numberImplementedInitiatives;
    }
    
    public void setNumberImplementedInitiatives(Double numberImplementedInitiatives) {
        this.numberImplementedInitiatives = numberImplementedInitiatives;
    }

    

    @Column(name="number_implemented_initiatives_score", precision=17)
    public Double getNumberImplementedInitiativesScore() {
        return this.numberImplementedInitiativesScore;
    }
    
    public void setNumberImplementedInitiativesScore(Double numberImplementedInitiativesScore) {
        this.numberImplementedInitiativesScore = numberImplementedInitiativesScore;
    }

    

    @Column(name="number_implemented_initiatives_weight", precision=17)
    public Double getNumberImplementedInitiativesWeight() {
        return this.numberImplementedInitiativesWeight;
    }
    
    public void setNumberImplementedInitiativesWeight(Double numberImplementedInitiativesWeight) {
        this.numberImplementedInitiativesWeight = numberImplementedInitiativesWeight;
    }

    

    @Column(name="number_platforms", precision=17)
    public Double getNumberPlatforms() {
        return this.numberPlatforms;
    }
    
    public void setNumberPlatforms(Double numberPlatforms) {
        this.numberPlatforms = numberPlatforms;
    }

    

    @Column(name="number_platforms_blueprints", precision=17)
    public Double getNumberPlatformsBlueprints() {
        return this.numberPlatformsBlueprints;
    }
    
    public void setNumberPlatformsBlueprints(Double numberPlatformsBlueprints) {
        this.numberPlatformsBlueprints = numberPlatformsBlueprints;
    }

    

    @Column(name="number_strategic_initiatives_bp_td", precision=17)
    public Double getNumberStrategicInitiativesBpTd() {
        return this.numberStrategicInitiativesBpTd;
    }
    
    public void setNumberStrategicInitiativesBpTd(Double numberStrategicInitiativesBpTd) {
        this.numberStrategicInitiativesBpTd = numberStrategicInitiativesBpTd;
    }

    

    @Column(name="number_strategic_initiatives_score", precision=17)
    public Double getNumberStrategicInitiativesScore() {
        return this.numberStrategicInitiativesScore;
    }
    
    public void setNumberStrategicInitiativesScore(Double numberStrategicInitiativesScore) {
        this.numberStrategicInitiativesScore = numberStrategicInitiativesScore;
    }

    

    @Column(name="number_strategic_initiatives_weight", precision=17)
    public Double getNumberStrategicInitiativesWeight() {
        return this.numberStrategicInitiativesWeight;
    }
    
    public void setNumberStrategicInitiativesWeight(Double numberStrategicInitiativesWeight) {
        this.numberStrategicInitiativesWeight = numberStrategicInitiativesWeight;
    }

    

    @Column(name="number_strategic_initiatives", precision=17)
    public Double getNumberStrategicInitiatives() {
        return this.numberStrategicInitiatives;
    }
    
    public void setNumberStrategicInitiatives(Double numberStrategicInitiatives) {
        this.numberStrategicInitiatives = numberStrategicInitiatives;
    }

    

    @Column(name="number_strategic_opportunities", precision=17)
    public Double getNumberStrategicOpportunities() {
        return this.numberStrategicOpportunities;
    }
    
    public void setNumberStrategicOpportunities(Double numberStrategicOpportunities) {
        this.numberStrategicOpportunities = numberStrategicOpportunities;
    }

    

    @Column(name="number_strategic_opportunities_bp_td", precision=17)
    public Double getNumberStrategicOpportunitiesBpTd() {
        return this.numberStrategicOpportunitiesBpTd;
    }
    
    public void setNumberStrategicOpportunitiesBpTd(Double numberStrategicOpportunitiesBpTd) {
        this.numberStrategicOpportunitiesBpTd = numberStrategicOpportunitiesBpTd;
    }

    

    @Column(name="number_strategic_opportunities_score", precision=17)
    public Double getNumberStrategicOpportunitiesScore() {
        return this.numberStrategicOpportunitiesScore;
    }
    
    public void setNumberStrategicOpportunitiesScore(Double numberStrategicOpportunitiesScore) {
        this.numberStrategicOpportunitiesScore = numberStrategicOpportunitiesScore;
    }

    

    @Column(name="number_strategic_opportunities_weight", precision=17)
    public Double getNumberStrategicOpportunitiesWeight() {
        return this.numberStrategicOpportunitiesWeight;
    }
    
    public void setNumberStrategicOpportunitiesWeight(Double numberStrategicOpportunitiesWeight) {
        this.numberStrategicOpportunitiesWeight = numberStrategicOpportunitiesWeight;
    }

    

    @Column(name="percentage_portfolio_architecure_impact", precision=17)
    public Double getPercentagePortfolioArchitecureImpact() {
        return this.percentagePortfolioArchitecureImpact;
    }
    
    public void setPercentagePortfolioArchitecureImpact(Double percentagePortfolioArchitecureImpact) {
        this.percentagePortfolioArchitecureImpact = percentagePortfolioArchitecureImpact;
    }

    

    @Column(name="portfolio_architect")
    public String getPortfolioArchitect() {
        return this.portfolioArchitect;
    }
    
    public void setPortfolioArchitect(String portfolioArchitect) {
        this.portfolioArchitect = portfolioArchitect;
    }

    

    @Column(name="project_comments")
    public String getProjectComments() {
        return this.projectComments;
    }
    
    public void setProjectComments(String projectComments) {
        this.projectComments = projectComments;
    }

    

    @Column(name="project_cost", precision=17)
    public Double getProjectCost() {
        return this.projectCost;
    }
    
    public void setProjectCost(Double projectCost) {
        this.projectCost = projectCost;
    }

    

    @Column(name="project_description")
    public String getProjectDescription() {
        return this.projectDescription;
    }
    
    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    

    @Column(name="project_name")
    public String getProjectName() {
        return this.projectName;
    }
    
    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    

    @Column(name="smart_spend_score", precision=17)
    public Double getSmartSpendScore() {
        return this.smartSpendScore;
    }
    
    public void setSmartSpendScore(Double smartSpendScore) {
        this.smartSpendScore = smartSpendScore;
    }

    

    @Column(name="smart_spend_weight", precision=17)
    public Double getSmartSpendWeight() {
        return this.smartSpendWeight;
    }
    
    public void setSmartSpendWeight(Double smartSpendWeight) {
        this.smartSpendWeight = smartSpendWeight;
    }

    

    @Column(name="sqp_impact_cost", precision=17)
    public Double getSqpImpactCost() {
        return this.sqpImpactCost;
    }
    
    public void setSqpImpactCost(Double sqpImpactCost) {
        this.sqpImpactCost = sqpImpactCost;
    }

    

    @Column(name="total_smart_spend", precision=17)
    public Double getTotalSmartSpend() {
        return this.totalSmartSpend;
    }
    
    public void setTotalSmartSpend(Double totalSmartSpend) {
        this.totalSmartSpend = totalSmartSpend;
    }

    

    @Column(name="employee_id")
    public Integer getEmployeeId() {
        return this.employeeId;
    }
    
    public void setEmployeeId(Integer employeeId) {
        this.employeeId = employeeId;
    }



public boolean equals(Object o) {
         if (this == o)
         return true;
		 if ( (o == null ) )
		 return false;
		 if ( !(o instanceof Scorecard) )
		 return false;

		 Scorecard that = ( Scorecard ) o;

		 return ( (this.getId()==that.getId()) || ( this.getId()!=null && that.getId()!=null && this.getId().equals(that.getId()) ) );

   }

   public int hashCode() {
         int result = 17;

         result = 37 * result + ( getId() == null ? 0 : this.getId().hashCode() );

         return result;
     }


}

