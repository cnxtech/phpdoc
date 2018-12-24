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

use Illuminate\Support\Collection;
use JMS\Serializer\Annotation as Serializer;

/**
 * This is the class Docblock.
 *
 * @author  Robin Radic
 *
 * @Serializer\XmlRoot("docblock")
 */
class Docblock
{
    /**
     * @var int
     * @Serializer\Type("integer")
     * @Serializer\XmlAttribute()
     */
    private $line;

    /**
     * @var string
     * @Serializer\Type("string")
     * @Serializer\XmlElement(cdata=false)
     */
    private $description;

    /**
     * @var string
     * @Serializer\Type("string")
     * @Serializer\XmlElement(cdata=false)
     * @Serializer\SerializedName("long-description")
     * @Serializer\Accessor(getter="getLongDescription")
     */
    private $longDescription;

    /**
     * @var \Codex\Phpdoc\Serializer\Phpdoc\File\Tag[]
     * @Serializer\Type("array<Codex\Phpdoc\Serializer\Phpdoc\File\Tag>")
     * @Serializer\XmlList(inline=true, entry="tag")
     * @Serializer\SerializedName("tag")
     */
    private $tags;

    /**
     * @return int
     */
    public function getLine(): int
    {
        return $this->line;
    }

    /**
     * @param int $line
     *
     * @return Docblock
     */
    public function setLine(int $line): self
    {
        $this->line = $line;

        return $this;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     *
     * @return Docblock
     */
    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return string
     * @\JMS\Serializer\Annotation\VirtualProperty()
     * @\JMS\Serializer\Annotation\SerializedName("longDescription")
     */
    public function getLongDescription(): string
    {
        /** @var \Codex\Processors\Parser\MarkdownParser $parser */
        $parser = app()->make(config('codex.processors.parser.parser'));
        $parser->setConfig(config('codex.processors.parser.markdown'));

        return $parser->parse($this->longDescription);
    }

    /**
     * @param string $longDescription
     *
     * @return Docblock
     */
    public function setLongDescription(string $longDescription): self
    {
        $this->longDescription = $longDescription;

        return $this;
    }

    /**
     * @return \Codex\Phpdoc\Serializer\Phpdoc\File\Tag[]
     */
    public function getTags(): array
    {
        return $this->tags;
    }

    /**
     * @param \Codex\Phpdoc\Serializer\Phpdoc\File\Tag[] $tags
     *
     * @return Docblock
     */
    public function setTags(array $tags): self
    {
        $this->tags = $tags;

        return $this;
    }

    protected function filter($name): Collection
    {
        return collect($this->tags)->filter(function (Tag $tag) use ($name) {
            return $tag->getName() === $name;
        });
    }

    public function hasTag($name): bool
    {
        return 1 === $this->filter($name)->count();
    }

    public function getTag($name): Tag
    {
        if (!$this->hasTag($name)) {
            return null;
        }

        return $this->filter($name)->first();
    }
}
