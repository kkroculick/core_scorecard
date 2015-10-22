/*American Express*/

package com.core_scorecard.core_scorecard;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;


import java.util.Arrays;

import javax.persistence.Transient;
import javax.persistence.CascadeType;
import javax.persistence.UniqueConstraint;




/**
 * VAimOwner generated by hbm2java
 */
@Entity
@Table(name="v_aim_owner"
    ,schema="public"
)
public class VAimOwner  implements java.io.Serializable
 {


private VAimOwnerId id;

    public VAimOwner() {
    }



     @EmbeddedId

    

    @AttributeOverrides( {
        @AttributeOverride(name="applicationName", column=@Column(name="application_name") ), 
        @AttributeOverride(name="applicationId", column=@Column(name="application_id") ), 
        @AttributeOverride(name="applicationDirector", column=@Column(name="application_director") ), 
        @AttributeOverride(name="applicationIntegrator", column=@Column(name="application_integrator") ), 
        @AttributeOverride(name="applicationPfa", column=@Column(name="application_pfa") ), 
        @AttributeOverride(name="applicationVpLevel1", column=@Column(name="application_vp_level1") ), 
        @AttributeOverride(name="applicationVpLevel1CostCenter", column=@Column(name="application_vp_level1_cost_center") ), 
        @AttributeOverride(name="applicationVpLevel2", column=@Column(name="application_vp_level2") ), 
        @AttributeOverride(name="applicationSvp", column=@Column(name="application_svp") ), 
        @AttributeOverride(name="productionSupportDirector", column=@Column(name="production_support_director") ), 
        @AttributeOverride(name="productionSupportVp", column=@Column(name="production_support_vp") ), 
        @AttributeOverride(name="owningBusinessDirector", column=@Column(name="owning_business_director") ), 
        @AttributeOverride(name="owningBusinessVp", column=@Column(name="owning_business_vp") ), 
        @AttributeOverride(name="lineOfBusinessLvl1", column=@Column(name="line_of_business_lvl1") ), 
        @AttributeOverride(name="lineOfBusinessLvl2", column=@Column(name="line_of_business_lvl2") ) } )
    public VAimOwnerId getId() {
        return this.id;
    }
    
    public void setId(VAimOwnerId id) {
        this.id = id;
    }



public boolean equals(Object o) {
         if (this == o)
         return true;
		 if ( (o == null ) )
		 return false;
		 if ( !(o instanceof VAimOwner) )
		 return false;

		 VAimOwner that = ( VAimOwner ) o;

		 return ( (this.getId()==that.getId()) || ( this.getId()!=null && that.getId()!=null && this.getId().equals(that.getId()) ) );

   }

   public int hashCode() {
         int result = 17;

         result = 37 * result + ( getId() == null ? 0 : this.getId().hashCode() );

         return result;
     }


}
