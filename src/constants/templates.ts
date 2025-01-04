export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
       <div style="max-width: 800px; margin: 20px auto; padding: 20px; background: #fff; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; margin-bottom: 20px;">
      <h1 style="color: #2b3e50;">Software Development Proposal</h1>
      <p>Prepared for: [Client’s Name, Client’s Company Name]</p>
      <p>Prepared by: [Your Name, Your Company Name]</p>
      <p>Date: [Insert Date]</p>
    </div>
    <div style="margin-bottom: 30px;">
      <h2 style="color: #2b3e50; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Executive Summary</h2>
      <p>
        [Provide a brief summary of the proposal, outlining the purpose, goals, and high-level overview 
        of the project. Keep it concise and engaging, summarizing the benefits and expected outcomes.]
      </p>
    </div>
    <div style="margin-bottom: 30px;">
      <h2 style="color: #2b3e50; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Project Overview</h2>
      <p>
        [Describe the project in detail, including its objectives, scope, and intended operation. Highlight 
        the problem it solves and the value it adds to the client’s business.]
      </p>
    </div>
    <div style="margin-bottom: 30px;">
      <h2 style="color: #2b3e50; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Proposed Solution</h2>
      <p>
        [Explain the technical solution, including tools, technologies, and methodologies that will be used 
        to deliver the project successfully.]
      </p>
    </div>
    <div style="margin-bottom: 30px;">
      <h2 style="color: #2b3e50; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Milestones and Timeline</h2>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <thead>
            <tr>
              <th style="padding: 8px 12px; border: 1px solid #ddd; text-align: left; background-color: #f1f1f1;">Milestone</th>
              <th style="padding: 8px 12px; border: 1px solid #ddd; text-align: left; background-color: #f1f1f1;">Description</th>
              <th style="padding: 8px 12px; border: 1px solid #ddd; text-align: left; background-color: #f1f1f1;">Estimated Hours</th>
              <th style="padding: 8px 12px; border: 1px solid #ddd; text-align: left; background-color: #f1f1f1;">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">Requirement Analysis</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">Gathering requirements and creating specifications</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">40</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">[Insert Date]</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">Design</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">Creating system architecture and UI mockups</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">50</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">[Insert Date]</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">Development</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">Building the software system</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">200</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">[Insert Date]</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">Testing</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">Quality assurance and performance testing</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">60</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">[Insert Date]</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">Deployment</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">Delivering and deploying the software</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">20</td>
              <td style="padding: 8px 12px; border: 1px solid #ddd;">[Insert Date]</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div style="margin-bottom: 30px;">
      <h2 style="color: #2b3e50; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Budget</h2>
      <p>[Provide a breakdown of costs, including labor, resources, and any other expenses.]</p>
    </div>
    <div style="margin-bottom: 30px;">
      <h2 style="color: #2b3e50; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Risks and Mitigation</h2>
      <p>
        [List potential risks associated with the project and explain strategies to address them.]
      </p>
    </div>
    <div style="margin-bottom: 30px;">
      <h2 style="color: #2b3e50; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Acceptance</h2>
      <p>Signed as accepted by the client:</p>
      <div style="margin-top: 40px;">
        <p>________________________________________</p>
        <p>Client’s Name, Title</p>
        <p>Date</p>
      </div>
    </div>
    <div style="text-align: center; font-size: 0.9em; color: #777; margin-top: 40px;">
      <p>Thank you for considering [Your Company Name] for your software development needs.</p>
    </div>
  </div>
      `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
                        <h1 style="text-align: center; color: #34495e;">Project Proposal</h1>
                        <h2>Overview</h2>
                        <p>
                          This proposal describes the scope and objectives of [Project Name]. The goal is to [project goal].
                        </p>
                        <h2>Timeline</h2>
                        <ol>
                          <li>Phase 1: [Details]</li>
                          <li>Phase 2: [Details]</li>
                          <li>Phase 3: [Details]</li>
                        </ol>
                     </div>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    <div style="font-family: Times New Roman, serif; line-height: 1.6; padding: 20px;">
                        <p>
                          [Your Address] <br/>
                          [City, State, ZIP Code] <br/>
                          [Email Address] <br/>
                          [Phone Number] <br/>
                          [Date]
                        </p>
                        <p>
                          [Recipient Name] <br/>
                          [Company Name] <br/>
                          [Address] <br/>
                          [City, State, ZIP Code]
                        </p>
                        <p>Dear [Recipient Name],</p>
                        <p>[Body of the letter]</p>
                        <p>Sincerely,<br/>[Your Name]</p>
                     </div>`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
                        <h1 style="text-align: center; color: #2980b9;">[Your Name]</h1>
                        <p style="text-align: center;">[Your Profession] | [Your Email] | [Your Phone]</p>
                        <h2>Experience</h2>
                        <p><strong>[Job Title]</strong>, [Company Name] ([Start Date] - [End Date])</p>
                        <ul>
                          <li>Key responsibility or achievement 1.</li>
                          <li>Key responsibility or achievement 2.</li>
                        </ul>
                        <h2>Education</h2>
                        <p><strong>[Degree]</strong>, [University Name] ([Year])</p>
                     </div>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
                        <p>
                          [Your Address] <br/>
                          [City, State, ZIP Code] <br/>
                          [Email Address] <br/>
                          [Phone Number] <br/>
                          [Date]
                        </p>
                        <p>
                          [Hiring Manager Name] <br/>
                          [Company Name] <br/>
                          [Company Address] <br/>
                          [City, State, ZIP Code]
                        </p>
                        <p>Dear [Hiring Manager Name],</p>
                        <p>
                          I am writing to express my interest in the [Job Title] position at [Company Name].
                          With my background in [Your Field], I am confident in my ability to contribute meaningfully to your team.
                        </p>
                        <p>Thank you for considering my application.</p>
                        <p>Sincerely,<br/>[Your Name]</p>
                     </div>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
    <div style="font-family: Times New Roman, serif; line-height: 1.6; padding: 20px;">
                        <p>
                          [Your Address] <br/>
                          [City, State, ZIP Code] <br/>
                          [Email Address] <br/>
                          [Phone Number] <br/>
                          [Date]
                        </p>
                        <p>Dear [Recipient Name],</p>
                        <p>[Body of the letter]</p>
                        <p>Sincerely,<br/>[Your Name]</p>
                     </div>`,
  },
];
