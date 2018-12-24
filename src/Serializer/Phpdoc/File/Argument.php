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

namespace Codex\Phpdoc\Serializer\Phpdoc\File;

use JMS\Serializer\Annotation as Serializer;

class Argument
{
    /**
     * @var string
     * @Serializer\Type("string")
     * @Serializer\XmlElement()
     */
    private $name;

    /**
     * @var string
     * @Serializer\Type("string")
     * @Serializer\XmlElement()
     */
    private $default;

    /**
     * @var string
     * @Serializer\Type("string")
     * @Serializer\XmlElement()
     */
    private $type;
}