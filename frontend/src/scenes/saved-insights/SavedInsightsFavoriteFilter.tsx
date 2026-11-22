import { IconHeart, IconHeartFilled } from '@posthog/icons'

import { LemonButton } from 'lib/lemon-ui/LemonButton'
import { SavedInsightFilters } from 'scenes/saved-insights/savedInsightsLogic'

export function SavedInsightsFavoriteFilter({
    favorited,
    setFilters,
    borderless,
}: {
    favorited: boolean | undefined | null
    setFilters: (filters: Partial<SavedInsightFilters>) => void
    borderless: boolean
}): JSX.Element {
    const isFavorited = !!favorited
    return (
        <LemonButton
            type="secondary"
            status={borderless && !isFavorited ? 'alt' : 'default'}
            active={isFavorited}
            onClick={() => setFilters({ favorited: !isFavorited })}
            size="small"
            icon={isFavorited ? <IconHeartFilled className="text-danger" /> : <IconHeart className="text-secondary" />}
        >
            Favorites
        </LemonButton>
    )
}
