<?php
/**
 * Copyright (c) 2018. Codex Project.
 *
 * The license can be found in the package and online at https://codex-project.mit-license.org.
 *
 * @copyright 2018 Codex Project
 * @author Robin Radic
 * @license https://codex-project.mit-license.org MIT License
 */

namespace Codex\Phpdoc\Contracts;

use Codex\Phpdoc\PhpdocRevision;
use Codex\Contracts\Revision;

interface Factory
{
    public function revision(Revision $revision): PhpdocRevision;
}
