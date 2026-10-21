export const blueprints = [
  {
    id: 'knowledge-compilation', title: 'From documents to validated knowledge',
    summary: 'A reference pattern separating source evidence, candidate extraction, explicit constraints and publication. Passing validation checks declared constraints; it does not prove factual truth.',
    diagram: `flowchart TB
      Sources["Documents and source evidence"] --> Parse["Layout-aware extraction and provenance"]
      Parse --> Candidates["Candidate entities and relationships"]
      Contracts["Versioned domain model and validation shapes"] --> Validate{"Constraint validation"}
      Candidates --> Validate
      Validate -->|Pass| Review{"Publication policy"}
      Validate -->|Fail| Quarantine["Quarantine and human review"]
      Review -->|Approved| Store["Canonical knowledge store"]
      Review -->|Uncertain| Quarantine
      Store --> Projections["Optional graph and search projections"]`
  },
  {
    id: 'governed-retrieval', title: 'Governed retrieval and tool use',
    summary: 'A reference runtime with authorization outside the model, evidence-backed retrieval and explicit approval for consequential actions. Add data stores only when a measured query need justifies them.',
    diagram: `flowchart TB
      User["User request"] --> API["Authenticated API"]
      API --> Policy["Authorization and tool policy"]
      Policy --> Plan["Planner and bounded execution"]
      Plan --> Tools["Typed retrieval tools / optional MCP"]
      Tools --> Data["Authorized knowledge and source evidence"]
      Data --> Answer["Draft answer with source references"]
      Answer --> Checks{"Evidence and response checks"}
      Checks -->|Pass| Response["Response"]
      Checks -->|Insufficient evidence| Abstain["Abstain or request review"]
      Plan --> Approval{"Approval for consequential writes"}
      Approval -->|Approved| Action["Scoped action executor"]`
  },
  {
    id: 'evaluation-release', title: 'Evaluation-driven releases',
    summary: 'A reference release pipeline for code, prompts and knowledge artifacts, combining deterministic validation with empirical evaluation and a monitored rollout.',
    diagram: `flowchart TB
      Change["Code, prompt or knowledge change"] --> Static["Type checks and schema validation"]
      Static --> Tests["Unit and integration tests"]
      Tests --> Eval["Versioned evaluation dataset"]
      Eval --> Gate{"Quality and risk thresholds"}
      Gate -->|Pass| Preview["Preview and human review"]
      Gate -->|Fail| Report["Failure report"]
      Preview --> Release["Versioned deployment"]
      Release --> Monitor["Monitoring and feedback"]
      Monitor --> Rollback["Rollback when needed"]`
  }
];
