import { ChangeEvent, ReactNode } from "react";

export interface AgendaCardProps {
    day_number: number;
    agenda_name: string;
    agenda_title: string;
    agenda_description: string;
    className?: ReactNode;
}

export interface ButtonProps {
    type: "button" | "submit" | "reset";
    id?: string;
    className?: string;
    title?: string;
    loading?: ReactNode;
    disabled?: boolean;
    isHoverGlow?: boolean;
    onClick?: () => void;
    onSubmit?: () => void;
    onMouseEnter?: (index?: number | unknown) => void;
    onMouseLeave?: () => void;
}

export interface ContainerProps {
    children: ReactNode;
    className?: string;
}


export interface CountdownProps {
    count_number: string;
    count_name: string;
}

export interface InputProps {
    type: "text" | "number" | "email" | "password"
    label?: string;
    id: string;
    name: string;
    value: string;
    placeholder: string;
    error?: any | string;
    disabled?: boolean;
    className?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface HomeLayoutProps {
    children: React.ReactNode;
}

export interface SpeakerImageProps {
    speaker_id?: number;
    speaker_image: string;
    index?: number;
    speaker_name?: string;
    title_color?: string;
    disable_link?: boolean;
    speaker_position?: string;
    speaker_description?: string;
    linkUrl?: string;
    className?: string;
}

export interface FeedbackProps {
    feedback_id?: number;
    feedback_image: string;
    feedback_name: string;
    size?: string;
  }

export interface VideoPlayerProps {
    src: string;      
    poster?: string;
    controls?: boolean; 
    autoPlay?: boolean;   
    loop?: boolean;         
    className?: string;        
  }