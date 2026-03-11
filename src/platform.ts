export type PlatformCapability = {
  name: string;
  sourceRepo: string;
};

export function platformCapabilities(): PlatformCapability[] {
  return [
    { name: "ai-assistant", sourceRepo: "synapse" },
    { name: "analytics-pipelines", sourceRepo: "flux" },
    { name: "runtime-infrastructure", sourceRepo: "nimbus" },
  ];
}
