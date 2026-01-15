import { useState } from "react";
import { Twitter, Facebook, Linkedin, Link2, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SocialShareProps {
    url?: string;
    title: string;
    description?: string;
}

export function SocialShare({ url, title, description }: SocialShareProps) {
    const [copied, setCopied] = useState(false);
    const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);
    const encodedDesc = encodeURIComponent(description || "");

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        email: `mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0A${encodedUrl}`
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            toast.success("Link copied to clipboard!");
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            toast.error("Failed to copy link");
        }
    };

    const openShare = (platform: keyof typeof shareLinks) => {
        window.open(shareLinks[platform], "_blank", "noopener,noreferrer,width=600,height=400");
    };

    return (
        <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium text-slate-500">Share this article</span>
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-blue-50 hover:text-blue-500 hover:border-blue-200 transition-colors"
                    onClick={() => openShare("twitter")}
                    title="Share on Twitter"
                >
                    <Twitter className="w-4 h-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-blue-100 hover:text-blue-600 hover:border-blue-300 transition-colors"
                    onClick={() => openShare("facebook")}
                    title="Share on Facebook"
                >
                    <Facebook className="w-4 h-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                    onClick={() => openShare("linkedin")}
                    title="Share on LinkedIn"
                >
                    <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors"
                    onClick={() => openShare("email")}
                    title="Share via Email"
                >
                    <Mail className="w-4 h-4" />
                </Button>
                <div className="w-px h-6 bg-slate-200 mx-1" />
                <Button
                    variant="outline"
                    size="icon"
                    className={`rounded-full transition-colors ${copied ? "bg-green-50 text-green-500 border-green-200" : "hover:bg-slate-100"}`}
                    onClick={copyToClipboard}
                    title="Copy link"
                >
                    {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                </Button>
            </div>
        </div>
    );
}
