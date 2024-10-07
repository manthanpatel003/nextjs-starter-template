param (
    [string]$ComponentName
)

if (-not $ComponentName) {
    Write-Host "Usage: .\createComponent.ps1 ComponentName"
    exit 1
}

$componentDir = "src/components/$ComponentName"
New-Item -ItemType Directory -Path $componentDir -Force

# Create constant.ts file
$constantContent = "// Constants for $ComponentName component"
Set-Content -Path "$componentDir\constant.ts" -Value $constantContent

# Create styles.ts file
$stylesContent = @"
import styled from "styled-components";

export const ${ComponentName}Box = styled.div`` ``;
"@
Set-Content -Path "$componentDir\$ComponentName.styles.ts" -Value $stylesContent

# Create main component file
$componentContent = @"
import React from "react";
import { ${ComponentName}Box } from "./$ComponentName.styles";
import { Container } from "@/styles/global.styles";

const ${ComponentName}: React.FC = () => {
    return (
        <${ComponentName}Box>
            <Container></Container>
        </${ComponentName}Box>
    );
};

export default ${ComponentName};
"@
Set-Content -Path "$componentDir\index.tsx" -Value $componentContent

Write-Host "$ComponentName component created successfully."
