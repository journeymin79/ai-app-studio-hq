window.HQ_TEMPLATE = {
  meta: {
    schemaVersion: "1.0.0",
    timezone: "Asia/Seoul",
    updatedAt: null
  },

  command: {
    id: "CMD-000",
    title: "",
    appId: "",
    instruction: "",
    status: "DRAFT",
    priority: "MEDIUM",
    createdAt: null,
    completedAt: null,
    progress: 0,
    taskIds: [],
    decisionIds: [],
    artifactIds: []
  },

  task: {
    id: "RES-000",
    commandId: null,
    appId: "",
    teamId: "",
    agentId: "",
    title: "",
    description: "",
    status: "TODO",
    priority: "MEDIUM",
    progress: 0,
    createdAt: null,
    startedAt: null,
    completedAt: null,
    updatedAt: null
  },

  activity: {
    id: "ACT-YYYYMMDD-000",
    timestamp: null,
    appId: "",
    teamId: "",
    agentId: null,
    commandId: null,
    taskId: null,
    type: "",
    title: "",
    summary: "",
    artifactId: null
  },

  artifact: {
    id: "ART-000",
    appId: "",
    teamId: "",
    commandId: null,
    taskId: null,
    type: "",
    title: "",
    summary: "",
    url: null,
    source: "GOOGLE_DRIVE",
    createdAt: null
  },

  decision: {
    id: "DEC-000",
    commandId: null,
    appId: "",
    requestedByTeamId: "",
    title: "",
    status: "REQUIRED",
    question: "",
    evidence: [],
    analysis: "",
    counterpoint: "",
    decision: null,
    reason: null,
    requestedAt: null,
    decidedAt: null
  },

  experiment: {
    id: "EXP-000",
    appId: "",
    commandId: null,
    title: "",
    hypothesis: "",
    change: "",
    primaryKpi: "",
    baseline: null,
    target: null,
    result: null,
    status: "IDEA",
    startedAt: null,
    completedAt: null,
    decisionId: null
  },

  finding: {
    id: "FND-000",
    appId: "",
    commandId: null,
    type: "FACT",
    text: "",
    evidenceArtifactIds: [],
    createdAt: null
  },

  dailySummary: {
    date: "YYYY-MM-DD",
    headline: "",
    summary: "",
    completedTaskIds: [],
    activeTaskIds: [],
    artifactIds: [],
    decisionRequiredIds: [],
    keyFindingIds: [],
    nextActions: [],
    generatedAt: null
  }
};
