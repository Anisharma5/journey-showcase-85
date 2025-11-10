import { Card } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import type { TeamMember as TeamMemberType } from '@/data/team';

interface TeamMemberProps {
  member: TeamMemberType;
}

export const TeamMember = ({ member }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden border-border/50 bg-card hover-lift">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-3">
        <div>
          <h3 className="text-xl font-bold text-primary">{member.name}</h3>
          <p className="text-sm text-accent font-medium">{member.role}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {member.bio}
        </p>
        <div className="flex items-start gap-2 pt-2 border-t border-border/40">
          <Sparkles className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
          <p className="text-xs text-muted-foreground italic">
            {member.funFact}
          </p>
        </div>
      </div>
    </Card>
  );
};
