import type { ObjectId } from 'mongodb';

interface Listing {
	_id: ObjectId | string;
	id: string;
	listing_url: string;
	title: string;
	summary: string;
	has_verified_traffic: boolean;
	has_verified_revenue: boolean;
	price: number;
	bid_count: number;
	sale_method: string;
	status: string;
	category: string;
	monetization: string;
	profit_average: string;
	end_at: string;
	super_seller: boolean;
	broker_seller: boolean;
	sponsored: boolean;
	editors_choice: boolean;
	multiple: number;
	'has_multiple?': boolean;
	revenue_multiple: number;
	target_raise_amount: null | number;
	ttm_revenue: null | number;
	confidential: boolean;
	property_name: string;
	established_at: number;
	country_name: string;
	ready_made: boolean;
	thumbnail_url: string;
	default_image: string;
	property_type: string;
	watched: boolean;
	scores: null;
	beta_scores: null;
	uniques_per_month: number;
	age_label: string;
	formatted_age_in_years: string;
	sale_method_title: string;
	integrations: string[];
	integration_icons: {
		tooltip_text: null | string;
		path: string;
		provider: string;
	}[];
	currency_label: string;
	protect_listing: boolean;
	display_verification_badge: boolean;
	all_verifications: {
		tooltip_text: null | string;
		path: string;
		provider: string;
	}[];
	manually_vetted: boolean;
	early_access_percentage: string;
	early_access_days_remaining: number;
	early_access_overlay_title_suffix: string;
	blurred_image_url: string;
	early_access_open_at: null;
	special_tags: boolean;
	hover_image_url: string;
	basic_info: {
		name: string;
		hover_image: string;
		padlocked: boolean;
	};
	open_listing: boolean;
	confidential_thumbnail_url: string;
	confidential_overlay_class: string;
	display_confidential_label: string;
	annual_organic_traffic: number;
	revenue_average: number;
	authority_score: number;
	app_rating: null;
	managed_by_flippa: boolean;
	original_price: null;
	price_dropped: boolean;
	price_dropped_percent: null;
	under_offer: boolean;
}

export type { Listing };
