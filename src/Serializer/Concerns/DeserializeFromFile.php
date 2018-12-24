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

namespace Codex\Phpdoc\Serializer\Concerns;

/**
 * This is the class DeserializeFromFile.
 *
 * @author  Robin Radic
 */
trait DeserializeFromFile
{
    public static function deserializeFromFile(string $filePath): self
    {
        return static::fromArray(require $filePath);
    }
}
