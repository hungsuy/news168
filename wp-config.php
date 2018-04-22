<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sharenewsdaily_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '=fByt1p_wjlAZObjH>1uo>pT+d^`Yu^1l5bSB#=A)[W^[%WFM^sf>>pyHRshL+A;');
define('SECURE_AUTH_KEY',  'C,Gjf9Erb>.f.kE[cBtRtSe}=.Z6j(,u!DO(<;swO%hh?&]~>#4)+Uj|+M X=E2g');
define('LOGGED_IN_KEY',    '9U/r,!GZD=fgxD:_Extdw$f$c7NK&V0=]&;|T.6j mIq5(K$HH:aKSJgfC+L`XCT');
define('NONCE_KEY',        'ts//BOP6EYY.[OqSfaE#X+4_&#/qV?x>u?^]vM]@}YZ&j~)2Izi(r73)R{bFPH,Y');
define('AUTH_SALT',        'D1N7t]XS(7)u7*/ !(4f(EhV[$94n?V{)|Gr^e1B`,ovOL96N$q}[~H[H3$u:iS[');
define('SECURE_AUTH_SALT', ' ye)g_hPVRY-t<hq/kgl~xD}#]oG$SQ.DuFb]1e7j1OM)SL]$40w.[3Z(nkbG#zf');
define('LOGGED_IN_SALT',   'usc[yQ~/4agvl%M10&UzT]R[/52@*?!wf#L^u0C0(>/2Gik9{RytrGqmnX7P&S:~');
define('NONCE_SALT',       'UGNpLk`:l4bja/Ed{ir/jaDFW(hqDWEnuhch-8(gjG/(|u_rab/^7Lt]O/^AaLFH');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
