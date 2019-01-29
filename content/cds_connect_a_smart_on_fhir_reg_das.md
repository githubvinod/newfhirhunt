--- 
 title: "CDS connect A SMART on FHIR&reg Dashboard for Managing Pain" 
 id: 88  
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
 description: "The Agency for Healthcare Research and Quality (AHRQ) in partnership with the MITRE Corporation and OCHIN developed a SMART on FHIR® app that serves a"
 featuredimage: 'https://www.medigy.com/img/featured/featured_88.jpg' 
 date: '2019-01-07'
 categories: ['Disease/pain management']
---
The Agency for Healthcare Research and Quality (AHRQ), in partnership with the MITRE Corporation and OCHIN, developed a SMART on FHIRÃÂ® app that serves as a dashboard or summary for managing chronic pain and pain-related treatment within the electronic health record (EHR). The app was developed as part of an ongoing project called CDS Connect, which provides a platform for authoring and sharing publicly-available clinical decision support (CDS) knowledge resources. The SMART on FHIRÃÂ® app summarizes pain-related information in a single view, such as pain-related diagnoses, medications, lab results, and pain assessment scores. Visual cues point the user to potential issues, e.g., when current medications include both benzodiazepines and opioids. The app has been piloted through OCHIN, a health information and innovation network serving safety net clinics, where clinicians found it Ã¢ÂÂsimple and intuitive.Ã¢ÂÂ

The Pain Management Summary artifact provides relevant information to consider when managing a patientÃ¢ÂÂs pain. The information is presented to the clinician as a Pain Management Summary dashboard, implemented as a web-based SMART on FHIRÃÂ® application. The application serves as a CQL integration engine to enable integration of the CQL logic and results with an EHR (such as Epic and Cerner) via the SMART on FHIRÃÂ® API. Implementers should work with their EHR vendor to determine the steps necessary to register and integrate a SMART on FHIRÃÂ® application within their EHR. Technical details regarding the SMART on FHIRÃÂ® API can be found on the [SMART Health IT](https://smarthealthit.org/) Web site.

The specific method used to invoke the Pain Management Summary CDS and present the SMART on FHIRÃÂ® application is dependent on implementation decisions made at each site. For the initial pilot of this artifact, the site elected to invoke the Pain Management CDS when a clinician clicks on a Ã¢ÂÂPain Summary InformationÃ¢ÂÂ link found within a specific patient record in the EHR.

As discussed previously, the logic used to query and return data for the Pain Management Summary dashboard is expressed in the CQL. However, it is important to note that the CQL code does not enact any alerts and/or notifications to reinforce specific CDC guidelines, potential contraindications, or patient safety warnings related to the data that is displayed. Instead, rules were embedded in the SMART on FHIRÃÂ® application to enact notifications displayed as flags, counts, and additional information to further contextual awareness of where a CDC recommendation statement intersects with the displayed data. Future implementers may opt to include the notifications in the CQL, others may opt to expand the notifications in the app. Iterations will likely be informed by capabilities, modules, and the user interface of the EHR, among many other considerations. Figure 1 below displays the first portion of a populated Pain Management Summary dashboard. The alert flags display as an exclamation point within a red circle to alert the clinician to an entry of potential concern, based on the CDC guidelines. The dashboard can be navigated by scrolling or via the navigation shortcuts on the left-hand side of the page.

[Read more](https://cds.ahrq.gov/cdsconnect/artifact/factors-consider-managing-chronic-pain-pain-management-summary)