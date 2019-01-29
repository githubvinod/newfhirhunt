--- 
 title: "FHIR®net API" 
 websiteUrl: "Nil" 
 forks: 0 
 openIssues: 0  
 facebookShare: 0  
 twitterShare: 0  
 emailShare: 0  
 githubUrl: 'Nil'
 stars: 0 
 watchers: 0 
 author: 'Admin' 
 type: 'post' 
 description: "This is the official support API for working with [HL7 FHIR®](httpwwwhl7orgfhir) on the Microsoft NET (dotnet) platformThis library provides- Class mo"
 featuredimage: '/img/featured/featured_99.jpg' 
 date: '2019-01-07'
 categories: ['Clinical / Medical research']
---
This is the official support API for working with [HL7 <span title="FHIR® is the registered trademark of HL7 and is used with the permission of HL7">FHIR<sup>®</sup></span>](http://www.hl7.org/fhir) on the Microsoft .NET (dotnet) platform.This library provides:

- Class models for working with the <span title="FHIR® is the registered trademark of HL7 and is used with the permission of HL7">FHIR<sup>®</sup></span> data model using POCO's
- Xml and Json parsers and serializers
- A REST client for working with <span title="FHIR® is the registered trademark of HL7 and is used with the permission of HL7">FHIR<sup>®</sup></span>-compliant servers
- Helper classes to work with the specification metadata, most notably StructureDefinition and generation of differentials
- Validation of instances based on profiles
- Evaluation FhirPath expressions

The library is currently split up in four parts:- Core (NuGet packages starting with Hl7.Fhir.<version>) - contains the FhirClient and parsers</version>
- Specification (NuGet packages starting with Hl7.Fhir.Specification.<version>) - functionality to work with the specification metadata and validation</version>
- FhirPath (NuGet package Hl7.FhirPath) - the FhirPath evaluator, used by the Core and Specification assemblies
- Support (NuGet package Hl7.Fhir.Support) - a library with interfaces, abstractions and utility methods that are used by the other packages

**IMPORTANT** Before installing one of the NuGet packages (or clone the repo) it is important to understand that HL7 has published several updates of the <span title="FHIR® is the registered trademark of HL7 and is used with the permission of HL7">FHIR<sup>®</sup></span> specification, each with breaking changes - so you need to ensure you use the version that is right for you:- [DSTU1](http://hl7.org/fhir/DSTU1/index.html) (published September 2014) is mostly obsolete, and the .NET version for this publication is not maintained anymore.
- [DSTU2](http://hl7.org/fhir/DSTU2/index.html) (published October 2015) in widespread use, and still supported by this library and other tooling on the market.
- [STU3](http://www.hl7.org/fhir) (published March 2017) latest release, mature support by this library and most other tooling on the market.
- [R4](http://build.fhir.org) (not yet published), support in alpha by this library. Would not be supported by production systems, since this release is still in development. Expected publication in Q3 2018.

Planned release DSTU2.1 was never published by HL7, but you will still find traces of it, in particular we still keep the NuGet package for it available.