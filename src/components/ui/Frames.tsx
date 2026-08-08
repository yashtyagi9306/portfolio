import React from 'react';

interface FrameProps {
    src?: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    fit?: 'cover' | 'contain';
    eager?: boolean;
    url?: string;
}

const Placeholder: React.FC<{ label: string }> = ({ label }) => (
    <div className="flex h-full w-full items-center justify-center bg-[#0C0B09] p-6 text-center font-mono text-xs text-white/40">
        {label}
    </div>
);

/** Wide desktop browser banner frame for web applications. */
export const BannerFrame: React.FC<FrameProps> = ({ src, alt, className = '', style, fit = 'cover', eager, url }) => (
    <div
        className={`relative overflow-hidden rounded-[24px] border border-line14 bg-[#14130F] shadow-panel ${className}`}
        style={style}
    >
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-[#1C1A14] px-4 py-3">
            <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>
            <div className="mx-auto max-w-md flex-1 rounded-md bg-black/40 px-3 py-1 text-center font-mono text-[11px] text-white/50 truncate">
                {url || 'https://' + alt.toLowerCase().replace(/[^a-z0-9]/g, '') + '.app'}
            </div>
            <div className="w-10" />
        </div>
        <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden bg-[#0C0B09]">
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    loading={eager ? 'eager' : 'lazy'}
                    className={`h-full w-full ${fit === 'cover' ? 'object-cover object-top' : 'object-contain'}`}
                />
            ) : (
                <Placeholder label={alt} />
            )}
        </div>
    </div>
);

/** Desktop Web Application Mockup / Card for screen galleries. */
export const WebMockup: React.FC<FrameProps> = ({ src, alt, className = '', style, fit = 'cover', eager }) => (
    <div
        className={`group w-full overflow-hidden rounded-[20px] border border-line14 bg-[#14130F] shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-line25 ${className}`}
        style={style}
    >
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#1C1A14] px-3.5 py-2.5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0C0B09]">
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    loading={eager ? 'eager' : 'lazy'}
                    className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${
                        fit === 'cover' ? 'object-cover object-top' : 'object-contain'
                    }`}
                />
            ) : (
                <Placeholder label={alt} />
            )}
        </div>
    </div>
);

/** PhoneMockup exported as alias to WebMockup for backwards compatibility. */
export const PhoneMockup: React.FC<FrameProps> = WebMockup;

