import React from 'react';
import { Phone, Wifi, Camera, CheckCircle2, ShieldCheck, Globe } from 'lucide-react';

export const PhoneIcon = ({ className }: { className?: string }) => <Phone className={className} />;
export const WifiIcon = ({ className }: { className?: string }) => <Wifi className={className} />;
export const CameraIcon = ({ className }: { className?: string }) => <Camera className={className} />;
export const CheckIcon = ({ className }: { className?: string }) => <CheckCircle2 className={className} />;
export const ShieldIcon = ({ className }: { className?: string }) => <ShieldCheck className={className} />;
export const GlobeIcon = ({ className }: { className?: string }) => <Globe className={className} />;