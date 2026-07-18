// Falcron | AeroX Development
// Author: itsfizys
export const config = {
	token: process.env.DISCORD_TOKEN || 'MTUyODAwOTgxNjgxODA1NzI5Ng.G2Dady.SjbdZ9XfeVxxdJZU2Gjti_ju-V3l4mInX5VyQY',
	clientId: process.env.DISCORD_CLIENT_ID || '1528009816818057296',
	prefix: '$',
	ownerIds: process.env.OWNER_IDS ? process.env.OWNER_IDS.split(',') : [],
	ownerOnly: false,

	links: {
		supportServer: 'https://discord.gg/Ez4gCJQDxB',
		invite: 'https://discord.com/oauth2/authorize?client_id=1528009816818057296',
	},

	cache: {
		maxSize: process.env.NODE_ENV === 'production' ? 100000 : 50000,
		flushOnStart: false,
		flushOnShutdown: false,
	},

	database: {
		uri: process.env.MONGO_URL || '',
	},

	presence: {
		status: 'idle',
		activity: {
			name: '-help || AeroX Development',
			type: 'Custom',
		},
	},

	watermark: '',
	version: '1.0.0',
};

/**
 * Project: Falcron
 * Author: itsfizys (Aegis)
 * Organization: AeroX Development
 * GitHub: https://github.com/AeroXDevs
 * License: Custom
 *
 * © 2026 AeroX Development. All rights reserved.
 */

