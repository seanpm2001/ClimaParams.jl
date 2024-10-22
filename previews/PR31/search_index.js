var documenterSearchIndex = {"docs":
[{"location":"#CLIMAParameters.jl-1","page":"Home","title":"CLIMAParameters.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This package contains all of the parameters use across the CliMA organization.","category":"page"},{"location":"#Usage-1","page":"Home","title":"Usage","text":"","category":"section"},{"location":"#Using-default-values-1","page":"Home","title":"Using default values","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using CLIMAParameters:AbstractEarthParameterSet\nusing CLIMAParameters.Planet: grav\n\nstruct EarthParameterSet <: AbstractEarthParameterSet end\nconst param_set = EarthParameterSet()\n_grav = Float32(grav(param_set))","category":"page"},{"location":"#Overriding-defaults-1","page":"Home","title":"Overriding defaults","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using CLIMAParameters\nimport CLIMAParameters.Planet: grav\n\nstruct EarthParameterSet <: AbstractEarthParameterSet end\nconst param_set = EarthParameterSet()\nCLIMAParameters.Planet.grav(::EarthParameterSet) = 2.0\n_grav = Float32(grav(param_set))","category":"page"},{"location":"API/#API-1","page":"API","title":"API","text":"","category":"section"},{"location":"API/#","page":"API","title":"API","text":"CurrentModule = CLIMAParameters","category":"page"},{"location":"API/#Types-1","page":"API","title":"Types","text":"","category":"section"},{"location":"API/#","page":"API","title":"API","text":"AbstractParameterSet\nAbstractEarthParameterSet\nAbstractMicrophysicsParameterSet\nAbstractCloudParameterSet\nAbstractPrecipParameterSet\nAbstractLiquidParameterSet\nAbstractIceParameterSet\nAbstractRainParameterSet\nAbstractSnowParameterSet\nAbstractEmpiricalParameterSet","category":"page"},{"location":"API/#CLIMAParameters.AbstractParameterSet","page":"API","title":"CLIMAParameters.AbstractParameterSet","text":"AbstractParameterSet\n\nThe top-level super-type parameter set.\n\n\n\n\n\n","category":"type"},{"location":"API/#CLIMAParameters.AbstractEarthParameterSet","page":"API","title":"CLIMAParameters.AbstractEarthParameterSet","text":"AbstractEarthParameterSet <: AbstractParameterSet\n\nAn earth parameter set, specific to planet Earth.\n\n\n\n\n\n","category":"type"},{"location":"API/#CLIMAParameters.AbstractMicrophysicsParameterSet","page":"API","title":"CLIMAParameters.AbstractMicrophysicsParameterSet","text":"AbstractMicrophysicsParameterSet <: AbstractParameterSet\n\nA set of parameters for cloud and precipitation microphysics parameterization.\n\n\n\n\n\n","category":"type"},{"location":"API/#CLIMAParameters.AbstractCloudParameterSet","page":"API","title":"CLIMAParameters.AbstractCloudParameterSet","text":"AbstractCloudParameterSet  <: AbstractMicrophysicsParameterSet\n\nA set of parameters for cloud microphysics parameterization.\n\n\n\n\n\n","category":"type"},{"location":"API/#CLIMAParameters.AbstractPrecipParameterSet","page":"API","title":"CLIMAParameters.AbstractPrecipParameterSet","text":"AbstractPrecipParameterSet <: AbstractMicrophysicsParameterSet\n\nA set of parameters for precipitation microphysics parameterization.\n\n\n\n\n\n","category":"type"},{"location":"API/#CLIMAParameters.AbstractLiquidParameterSet","page":"API","title":"CLIMAParameters.AbstractLiquidParameterSet","text":"AbstractLiquidParameterSet <: AbstractCloudParameterSet\n\nA set of parameters for cloud liquid water microphysics parameterization.\n\n\n\n\n\n","category":"type"},{"location":"API/#CLIMAParameters.AbstractIceParameterSet","page":"API","title":"CLIMAParameters.AbstractIceParameterSet","text":"AbstractIceParameterSet    <: AbstractCloudParameterSet\n\nA set of parameters for cloud ice microphysics parameterization.\n\n\n\n\n\n","category":"type"},{"location":"API/#CLIMAParameters.AbstractRainParameterSet","page":"API","title":"CLIMAParameters.AbstractRainParameterSet","text":"AbstractRainParameterSet   <: AbstractPrecipParameterSet\n\nA set of parameters for rain microphysics parameterization.\n\n\n\n\n\n","category":"type"},{"location":"API/#CLIMAParameters.AbstractSnowParameterSet","page":"API","title":"CLIMAParameters.AbstractSnowParameterSet","text":"AbstractSnowParameterSet   <: AbstractPrecipParameterSet\n\nA set of parameters for snow microphysics parameterization.\n\n\n\n\n\n","category":"type"},{"location":"API/#CLIMAParameters.AbstractEmpiricalParameterSet","page":"API","title":"CLIMAParameters.AbstractEmpiricalParameterSet","text":"AbstractEmpiricalParameterSet <: AbstractParameterSet\n\nA set of empirical parameters used for water viscosity and surface tension\n\n\n\n\n\n","category":"type"},{"location":"API/#Universal-Constants-1","page":"API","title":"Universal Constants","text":"","category":"section"},{"location":"API/#","page":"API","title":"API","text":"gas_constant\nlight_speed\nh_Planck\nk_Boltzmann\nStefan\nastro_unit\navogad","category":"page"},{"location":"API/#CLIMAParameters.gas_constant","page":"API","title":"CLIMAParameters.gas_constant","text":"gas_constant\n\nUniversal gas constant (J/mol/K)\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.light_speed","page":"API","title":"CLIMAParameters.light_speed","text":"light_speed\n\nSpeed of light in vacuum (m/s)\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.h_Planck","page":"API","title":"CLIMAParameters.h_Planck","text":"h_Planck\n\nPlanck constant (m^2 kg/s)\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.k_Boltzmann","page":"API","title":"CLIMAParameters.k_Boltzmann","text":"k_Boltzmann\n\nBoltzmann constant (m^2 kg/s^2/K)\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Stefan","page":"API","title":"CLIMAParameters.Stefan","text":"Stefan\n\nStefan-Boltzmann constant (W/m^2/K^4)\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.astro_unit","page":"API","title":"CLIMAParameters.astro_unit","text":"astro_unit\n\nAstronomical unit (m)\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.avogad","page":"API","title":"CLIMAParameters.avogad","text":"avogad(::Type{FT})\n\nAvogadro's number [molec/mol]\n\n\n\n\n\n","category":"function"},{"location":"API/#Planet-1","page":"API","title":"Planet","text":"","category":"section"},{"location":"API/#","page":"API","title":"API","text":"Planet\nPlanet.molmass_dryair\nPlanet.R_d\nPlanet.kappa_d\nPlanet.cp_d\nPlanet.cv_d\nPlanet.ρ_cloud_liq\nPlanet.ρ_cloud_ice\nPlanet.molmass_water\nPlanet.molmass_ratio\nPlanet.R_v\nPlanet.cp_v\nPlanet.cp_l\nPlanet.cp_i\nPlanet.cv_v\nPlanet.cv_l\nPlanet.cv_i\nPlanet.T_freeze\nPlanet.T_min\nPlanet.T_max\nPlanet.T_icenuc\nPlanet.T_triple\nPlanet.T_0\nPlanet.LH_v0\nPlanet.LH_s0\nPlanet.LH_f0\nPlanet.e_int_v0\nPlanet.e_int_i0\nPlanet.press_triple\nPlanet.ρ_ocean\nPlanet.cp_ocean\nPlanet.planet_radius\nPlanet.day\nPlanet.Omega\nPlanet.grav\nPlanet.year_anom\nPlanet.orbit_semimaj\nPlanet.TSI\nPlanet.MSLP\nPlanet.T_surf_ref\nPlanet.T_min_ref","category":"page"},{"location":"API/#CLIMAParameters.Planet","page":"API","title":"CLIMAParameters.Planet","text":"Planet\n\nPlanetary parameters.\n\n\n\n\n\n","category":"module"},{"location":"API/#CLIMAParameters.Planet.molmass_dryair","page":"API","title":"CLIMAParameters.Planet.molmass_dryair","text":"Molecular weight dry air (kg/mol) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.R_d","page":"API","title":"CLIMAParameters.Planet.R_d","text":"Gas constant dry air (J/kg/K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.kappa_d","page":"API","title":"CLIMAParameters.Planet.kappa_d","text":"Adiabatic exponent dry air \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.cp_d","page":"API","title":"CLIMAParameters.Planet.cp_d","text":"Isobaric specific heat dry air \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.cv_d","page":"API","title":"CLIMAParameters.Planet.cv_d","text":"Isochoric specific heat dry air \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.ρ_cloud_liq","page":"API","title":"CLIMAParameters.Planet.ρ_cloud_liq","text":"Density of liquid water (kg/m^3) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.ρ_cloud_ice","page":"API","title":"CLIMAParameters.Planet.ρ_cloud_ice","text":"Density of ice water (kg/m^3) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.molmass_water","page":"API","title":"CLIMAParameters.Planet.molmass_water","text":"Molecular weight (kg/mol) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.molmass_ratio","page":"API","title":"CLIMAParameters.Planet.molmass_ratio","text":"Molar mass ratio dry air/water \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.R_v","page":"API","title":"CLIMAParameters.Planet.R_v","text":"Gas constant water vapor (J/kg/K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.cp_v","page":"API","title":"CLIMAParameters.Planet.cp_v","text":"Isobaric specific heat vapor (J/kg/K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.cp_l","page":"API","title":"CLIMAParameters.Planet.cp_l","text":"Isobaric specific heat liquid (J/kg/K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.cp_i","page":"API","title":"CLIMAParameters.Planet.cp_i","text":"Isobaric specific heat ice (J/kg/K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.cv_v","page":"API","title":"CLIMAParameters.Planet.cv_v","text":"Isochoric specific heat vapor (J/kg/K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.cv_l","page":"API","title":"CLIMAParameters.Planet.cv_l","text":"Isochoric specific heat liquid (J/kg/K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.cv_i","page":"API","title":"CLIMAParameters.Planet.cv_i","text":"Isochoric specific heat ice (J/kg/K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.T_freeze","page":"API","title":"CLIMAParameters.Planet.T_freeze","text":"Freezing point temperature (K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.T_min","page":"API","title":"CLIMAParameters.Planet.T_min","text":"Minimum temperature guess in saturation adjustment (K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.T_max","page":"API","title":"CLIMAParameters.Planet.T_max","text":"Maximum temperature guess in saturation adjustment (K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.T_icenuc","page":"API","title":"CLIMAParameters.Planet.T_icenuc","text":"Homogeneous nucleation temperature (K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.T_triple","page":"API","title":"CLIMAParameters.Planet.T_triple","text":"Triple point temperature (K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.T_0","page":"API","title":"CLIMAParameters.Planet.T_0","text":"Reference temperature (K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.LH_v0","page":"API","title":"CLIMAParameters.Planet.LH_v0","text":"Latent heat vaporization at T_0 (J/kg) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.LH_s0","page":"API","title":"CLIMAParameters.Planet.LH_s0","text":"Latent heat sublimation at T_0 (J/kg) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.LH_f0","page":"API","title":"CLIMAParameters.Planet.LH_f0","text":"Latent heat of fusion at T_0 (J/kg) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.e_int_v0","page":"API","title":"CLIMAParameters.Planet.e_int_v0","text":"Specific internal energy of vapor at T_0 (J/kg) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.e_int_i0","page":"API","title":"CLIMAParameters.Planet.e_int_i0","text":"Specific internal energy of ice at T_0 (J/kg) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.press_triple","page":"API","title":"CLIMAParameters.Planet.press_triple","text":"Triple point vapor pressure (Pa) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.ρ_ocean","page":"API","title":"CLIMAParameters.Planet.ρ_ocean","text":"Reference density sea water (kg/m^3) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.cp_ocean","page":"API","title":"CLIMAParameters.Planet.cp_ocean","text":"Specific heat sea water (J/kg/K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.planet_radius","page":"API","title":"CLIMAParameters.Planet.planet_radius","text":"Mean planetary radius (m) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.day","page":"API","title":"CLIMAParameters.Planet.day","text":"Length of day (s) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.Omega","page":"API","title":"CLIMAParameters.Planet.Omega","text":"Ang. velocity planetary rotation (1/s) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.grav","page":"API","title":"CLIMAParameters.Planet.grav","text":"Gravitational acceleration (m/s^2) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.year_anom","page":"API","title":"CLIMAParameters.Planet.year_anom","text":"Length of anomalistic year (s) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.orbit_semimaj","page":"API","title":"CLIMAParameters.Planet.orbit_semimaj","text":"ngth of semimajor orbital axis (m) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.TSI","page":"API","title":"CLIMAParameters.Planet.TSI","text":"Total solar irradiance (W/m^2) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.MSLP","page":"API","title":"CLIMAParameters.Planet.MSLP","text":"Mean sea level pressure (Pa) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.T_surf_ref","page":"API","title":"CLIMAParameters.Planet.T_surf_ref","text":"Mean surface temperature (K) in reference state \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Planet.T_min_ref","page":"API","title":"CLIMAParameters.Planet.T_min_ref","text":"Minimum temperature (K) in reference state \n\n\n\n\n\n","category":"function"},{"location":"API/#Common-1","page":"API","title":"Common","text":"","category":"section"},{"location":"API/#Sub-grid-scale-1","page":"API","title":"Sub-grid scale","text":"","category":"section"},{"location":"API/#","page":"API","title":"API","text":"SubgridScale\nSubgridScale.von_karman_const","category":"page"},{"location":"API/#CLIMAParameters.SubgridScale","page":"API","title":"CLIMAParameters.SubgridScale","text":"SubgridScale\n\nSub-grid scale parameters, shared by multiple models including the atmosphere, ocean and surface fluxes.\n\n\n\n\n\n","category":"module"},{"location":"API/#CLIMAParameters.SubgridScale.von_karman_const","page":"API","title":"CLIMAParameters.SubgridScale.von_karman_const","text":"Von Karman constant (dimensionless) \n\n\n\n\n\n","category":"function"},{"location":"API/#Atmos-1","page":"API","title":"Atmos","text":"","category":"section"},{"location":"API/#","page":"API","title":"API","text":"Atmos","category":"page"},{"location":"API/#CLIMAParameters.Atmos","page":"API","title":"CLIMAParameters.Atmos","text":"Atmos\n\nAtmospheric parameters.\n\n\n\n\n\n","category":"module"},{"location":"API/#Sub-grid-scale-2","page":"API","title":"Sub-grid scale","text":"","category":"section"},{"location":"API/#","page":"API","title":"API","text":"Atmos.SubgridScale.C_smag\nAtmos.SubgridScale.C_drag\nAtmos.SubgridScale.inv_Pr_turb\nAtmos.SubgridScale.Prandtl_air\nAtmos.SubgridScale.c_a_KASM\nAtmos.SubgridScale.c_e1_KASM\nAtmos.SubgridScale.c_e2_KASM\nAtmos.SubgridScale.c_1_KASM\nAtmos.SubgridScale.c_2_KASM\nAtmos.SubgridScale.c_3_KASM","category":"page"},{"location":"API/#CLIMAParameters.Atmos.SubgridScale.C_smag","page":"API","title":"CLIMAParameters.Atmos.SubgridScale.C_smag","text":"Smagorinsky Coefficient (dimensionless) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.SubgridScale.C_drag","page":"API","title":"CLIMAParameters.Atmos.SubgridScale.C_drag","text":"Drag coefficient (dimensionless) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.SubgridScale.inv_Pr_turb","page":"API","title":"CLIMAParameters.Atmos.SubgridScale.inv_Pr_turb","text":"Turbulent Prandtl Number (dimensionless) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.SubgridScale.Prandtl_air","page":"API","title":"CLIMAParameters.Atmos.SubgridScale.Prandtl_air","text":"Molecular Prandtl Number, dry air (dimensionless) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.SubgridScale.c_a_KASM","page":"API","title":"CLIMAParameters.Atmos.SubgridScale.c_a_KASM","text":"c_a KASM, 2006 (dimensionless) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.SubgridScale.c_e1_KASM","page":"API","title":"CLIMAParameters.Atmos.SubgridScale.c_e1_KASM","text":"c_e1 KASM, 2006 (dimensionless) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.SubgridScale.c_e2_KASM","page":"API","title":"CLIMAParameters.Atmos.SubgridScale.c_e2_KASM","text":"c_e2 KASM, 2006 (dimensionless) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.SubgridScale.c_1_KASM","page":"API","title":"CLIMAParameters.Atmos.SubgridScale.c_1_KASM","text":"c_1  KASM, 2006 (dimensionless) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.SubgridScale.c_2_KASM","page":"API","title":"CLIMAParameters.Atmos.SubgridScale.c_2_KASM","text":"c_2 KASM, 2006 (dimensionless) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.SubgridScale.c_3_KASM","page":"API","title":"CLIMAParameters.Atmos.SubgridScale.c_3_KASM","text":"c_3 KASM, 2006 (dimensionless) \n\n\n\n\n\n","category":"function"},{"location":"API/#Microphysics-1","page":"API","title":"Microphysics","text":"","category":"section"},{"location":"API/#","page":"API","title":"API","text":"Please see the microphysics documentation for an explanation of the default values.","category":"page"},{"location":"API/#","page":"API","title":"API","text":"Atmos.Microphysics.n0\nAtmos.Microphysics.μ_sno\nAtmos.Microphysics.ν_sno\nAtmos.Microphysics.r0\nAtmos.Microphysics.m0\nAtmos.Microphysics.χm\nAtmos.Microphysics.me\nAtmos.Microphysics.Δm\nAtmos.Microphysics.a0\nAtmos.Microphysics.χa\nAtmos.Microphysics.ae\nAtmos.Microphysics.Δa\nAtmos.Microphysics.v0\nAtmos.Microphysics.χv\nAtmos.Microphysics.ve\nAtmos.Microphysics.Δv\nAtmos.Microphysics.C_drag\nAtmos.Microphysics.τ_cond_evap\nAtmos.Microphysics.τ_sub_dep\nAtmos.Microphysics.q_liq_threshold\nAtmos.Microphysics.τ_acnv\nAtmos.Microphysics.r_ice_snow\nAtmos.Microphysics.E\nAtmos.Microphysics.a_vent\nAtmos.Microphysics.b_vent\nAtmos.Microphysics.K_therm\nAtmos.Microphysics.D_vapor\nAtmos.Microphysics.ν_air\nAtmos.Microphysics.N_Sc","category":"page"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.n0","page":"API","title":"CLIMAParameters.Atmos.Microphysics.n0","text":"Marshall-Palmer distribution n_0 coeff for rain or snow (1/m^4) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.μ_sno","page":"API","title":"CLIMAParameters.Atmos.Microphysics.μ_sno","text":"coefficient to compute Marshall-Palmer distribution coefficient n_0(ρq_snow/ρ0) for snow (1/m^4) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.ν_sno","page":"API","title":"CLIMAParameters.Atmos.Microphysics.ν_sno","text":"coefficient to compute Marshall-Palmer distribution coefficient n_0(ρq_snow/ρ0) for snow (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.r0","page":"API","title":"CLIMAParameters.Atmos.Microphysics.r0","text":"assumed length scale for water drop or ice crystal (m) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.m0","page":"API","title":"CLIMAParameters.Atmos.Microphysics.m0","text":"coefficient in mass, radius/r0, (kg) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.χm","page":"API","title":"CLIMAParameters.Atmos.Microphysics.χm","text":"coefficient in mass, radius/r0, (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.me","page":"API","title":"CLIMAParameters.Atmos.Microphysics.me","text":"exponent in mass, radius/r0, (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.Δm","page":"API","title":"CLIMAParameters.Atmos.Microphysics.Δm","text":"exponent in mass, radius/r0, (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.a0","page":"API","title":"CLIMAParameters.Atmos.Microphysics.a0","text":"coefficient in area, radius/r0, relation (m^2) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.χa","page":"API","title":"CLIMAParameters.Atmos.Microphysics.χa","text":"coefficient in area, radius/r0, (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.ae","page":"API","title":"CLIMAParameters.Atmos.Microphysics.ae","text":"exponent in area, radius/r0, relation \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.Δa","page":"API","title":"CLIMAParameters.Atmos.Microphysics.Δa","text":"exponent in area, radius/r0, (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.v0","page":"API","title":"CLIMAParameters.Atmos.Microphysics.v0","text":"coefficient in velocity, radius/r0, (m/s) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.χv","page":"API","title":"CLIMAParameters.Atmos.Microphysics.χv","text":"coefficient in velocity, radius/r0, (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.ve","page":"API","title":"CLIMAParameters.Atmos.Microphysics.ve","text":"exponent in velocity, radius/r0, \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.Δv","page":"API","title":"CLIMAParameters.Atmos.Microphysics.Δv","text":"exponent in velocity, radius/r0, (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.C_drag","page":"API","title":"CLIMAParameters.Atmos.Microphysics.C_drag","text":"drag coefficient for rain drops (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.τ_cond_evap","page":"API","title":"CLIMAParameters.Atmos.Microphysics.τ_cond_evap","text":"condensation/evaporation timescale (s) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.τ_sub_dep","page":"API","title":"CLIMAParameters.Atmos.Microphysics.τ_sub_dep","text":"sublimation/deposition timescale (s) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.q_liq_threshold","page":"API","title":"CLIMAParameters.Atmos.Microphysics.q_liq_threshold","text":"autoconversion threshold ∈(0.5, 1) * 1e-3 (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.τ_acnv","page":"API","title":"CLIMAParameters.Atmos.Microphysics.τ_acnv","text":"autoconversion timescale ∈(1e3, 1e4) (s) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.r_ice_snow","page":"API","title":"CLIMAParameters.Atmos.Microphysics.r_ice_snow","text":"threshold between ice and snow (m) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.E","page":"API","title":"CLIMAParameters.Atmos.Microphysics.E","text":"collision efficiency (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.a_vent","page":"API","title":"CLIMAParameters.Atmos.Microphysics.a_vent","text":"ventilation factor coefficient for rain or snow (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.b_vent","page":"API","title":"CLIMAParameters.Atmos.Microphysics.b_vent","text":"ventilation factor coefficient for rain or snow (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.K_therm","page":"API","title":"CLIMAParameters.Atmos.Microphysics.K_therm","text":"thermal conductivity of air (J/m/s/K) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.D_vapor","page":"API","title":"CLIMAParameters.Atmos.Microphysics.D_vapor","text":"diffusivity of water vapor (m^2/s) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.ν_air","page":"API","title":"CLIMAParameters.Atmos.Microphysics.ν_air","text":"kinematic viscosity of air (m^2/s) \n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Atmos.Microphysics.N_Sc","page":"API","title":"CLIMAParameters.Atmos.Microphysics.N_Sc","text":"Schmidt number (-) \n\n\n\n\n\n","category":"function"},{"location":"API/#Water-1","page":"API","title":"Water","text":"","category":"section"},{"location":"API/#","page":"API","title":"API","text":"Water.VIS_0\nWater.ST_exp\nWater.ST_T_crit\nWater.ST_ref\nWater.VIS_e1\nWater.VIS_e3\nWater.VIS_e2\nWater.ST_k\nWater.ST_corr","category":"page"},{"location":"API/#CLIMAParameters.Water.VIS_0","page":"API","title":"CLIMAParameters.Water.VIS_0","text":"Viscosity at T_0 [Pa s]\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Water.ST_exp","page":"API","title":"CLIMAParameters.Water.ST_exp","text":"Surface tension exponent correction factor\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Water.ST_T_crit","page":"API","title":"CLIMAParameters.Water.ST_T_crit","text":"Surface tension critical temperature [K]\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Water.ST_ref","page":"API","title":"CLIMAParameters.Water.ST_ref","text":"Surface tension at reference temperature 298.15 K [N/m]\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Water.VIS_e1","page":"API","title":"CLIMAParameters.Water.VIS_e1","text":"Viscosity exponent correction parameters [K]\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Water.VIS_e3","page":"API","title":"CLIMAParameters.Water.VIS_e3","text":"Viscosity exponent correction parameters [K⁻²]\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Water.VIS_e2","page":"API","title":"CLIMAParameters.Water.VIS_e2","text":"Viscosity exponent correction parameters [K⁻¹]\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Water.ST_k","page":"API","title":"CLIMAParameters.Water.ST_k","text":"Surface tension multiplier [N/m]\n\n\n\n\n\n","category":"function"},{"location":"API/#CLIMAParameters.Water.ST_corr","page":"API","title":"CLIMAParameters.Water.ST_corr","text":"Surface tension multiplier correction factor\n\n\n\n\n\n","category":"function"}]
}
