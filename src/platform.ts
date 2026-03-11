export type PlatformCapability = {
  name: string;
  sourceRepo: string;
};

export function platformCapabilities(): PlatformCapability[] {
  return [
    { name: "ai-assistant", sourceRepo: "ai-platform" },
    { name: "analytics-pipelines", sourceRepo: "data-platform" },
    { name: "runtime-infrastructure", sourceRepo: "infrastructure-platform" },
  ];
}
