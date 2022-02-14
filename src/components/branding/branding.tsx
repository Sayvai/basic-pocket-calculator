import React from 'react';
import './branding.scss';

interface BrandingProps {
  name: string;
  assetUrl?: string;
  backgroundColorHex?: string;
}

function Branding({ name, assetUrl, backgroundColorHex }: BrandingProps) {

  return (
    <div data-testid="component-branding" className="branding" style={{backgroundColor: backgroundColorHex}}>
      {assetUrl
        ? <><img src={assetUrl} alt={`${name} logo`} /></>
        : <h2>{name}</h2>
      }
      <h3>Pocket Calculator</h3>
    </div>
  );
}

export default React.memo(Branding);